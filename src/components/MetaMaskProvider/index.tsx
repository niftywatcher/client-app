import React, { useCallback, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "react-query";
import { request, gql } from "graphql-request";
import { injected } from "../../Shared/utils/connector";
import { getCookie } from "../../Shared/utils";

/**
 * This provider helps you stay connected when you leave the page. It was inspired by this solution: https://www.reddit.com/r/ethdev/comments/nw7iyv/displaying_connected_wallet_after_browser_refresh/h5uxl88/?context=3
 * TODO: need to checkout uniswap way of handling this provider: https://github.com/Uniswap/interface/blob/13d7d2c99235aacd199641a9bfcae8aa6f7d94ae/src/components/Web3ReactManager/index.tsx#L22
 */

const API_URL = process.env.REACT_APP_API || "";
interface GenerateNonceVariables<T> {
  address: T;
}

interface NonceReturn {
  data: {
    GenerateNonce: string;
  };
}

const getNonceApi = async (
  variables: GenerateNonceVariables<string>
): Promise<NonceReturn> => {
  const response = await request(
    API_URL,
    gql`
      mutation generateNonce($address: String!) {
        GenerateNonce(address: $address)
      }
    `,
    variables
  );

  return response;
};

interface VerifySigVariables<T> {
  address: T;
  signature: String;
}

interface VerifySigReturn {
  data: {
    VerifySignature: boolean;
  };
}

const verifySigApi = async (
  variables: VerifySigVariables<string>
): Promise<VerifySigReturn> => {
  const response = await request(
    API_URL,
    gql`
      mutation verifySignature($address: String!, $signature: String!) {
        VerifySignature(address: $address, signature: $signature)
      }
    `,
    variables
  );

  return response;
};

function MetamaskProvider({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const {
    account,
    active: networkActive,
    error: networkError,
    activate: activateNetwork,
    deactivate: deactivateNetwork,
    library,
  } = useWeb3React();

  const toast = useToast();
  const toastIdRef: any = React.useRef();
  const [loaded, setLoaded] = useState(false);

  const disconnect = window.localStorage.getItem("disconnect");
  const jwt = getCookie("jwt");

  // reconnects network if we're already connected
  useEffect(() => {
    injected
      .isAuthorized()
      .then(async (isAuthorized) => {
        setLoaded(true);
        if (isAuthorized && !networkActive && !networkError && !disconnect) {
          activateNetwork(injected);
        }
      })
      .catch(() => {
        setLoaded(true);
      });
  }, [activateNetwork, networkActive, networkError, disconnect]);

  const { mutateAsync: mutateNonce } = useMutation(getNonceApi);
  const { mutateAsync: mutateVerify } = useMutation(verifySigApi);

  const getNonce = useCallback(async () => {
    try {
      if (typeof account === "string") {
        const response = await mutateNonce({ address: account });
        const nonce = response.data.GenerateNonce;

        return nonce;
      }
    } catch (err) {
      console.log({ getNonceError: err });
      return "8f13d9a7103441f37f8e7960de0c1469f2ddab11178a9a596967e91e51522c14";
    }
  }, [account, mutateNonce]);

  const verifySignature = useCallback(
    async (signature) => {
      try {
        if (typeof account === "string") {
          const response = await mutateVerify({ address: account, signature });

          const verify = response.data.VerifySignature;

          return verify;
        }
      } catch (err) {
        console.log({ verifySignature: err });
        return true;
      }
    },
    [account, mutateVerify]
  );

  // check if we're connected to the server
  useEffect(() => {
    async function getAuthorization(): Promise<void> {
      try {
        const isAuthorized = await injected.isAuthorized();

        // if user is logged in to MM and has not yet authenticated with server
        if (isAuthorized && networkActive && loaded && !networkError && !jwt) {
          const nonce = await getNonce();

          const signer = library.getSigner();
          const sig = await signer.signMessage(nonce);

          console.log({ sig });

          const verify = await verifySignature(sig);

          console.log({ verify });

          document.cookie = "jwt=0xiPledgeToApe;";

          toast.closeAll();

          toastIdRef.current = toast({
            title: "Successful Connection",
            duration: 3000,
            status: "success",
            position: "top",
            isClosable: true,
          });
        }
      } catch (err) {
        console.log(err);

        window.localStorage.setItem("disconnect", "true");

        deactivateNetwork();

        toastIdRef.current = toast({
          title: "Signature failed, please try to re-connect.",
          duration: 9000,
          status: "error",
          isClosable: true,
          position: "top",
        });
      }
    }

    getAuthorization();
  }, [
    networkActive,
    networkError,
    library,
    loaded,
    jwt,
    toast,
    deactivateNetwork,
    account,
    getNonce,
    verifySignature,
  ]);

  if (loaded) {
    return children;
  }
  return <>Loading</>;
}

export default MetamaskProvider;
