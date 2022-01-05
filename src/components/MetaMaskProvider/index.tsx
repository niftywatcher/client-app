import React, { useEffect, useState } from "react";
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

interface GenerateNonceVariables {
  address: string | null | undefined;
}

interface NonceReturn {
  data: {
    GenerateNonce: string;
  };
}

const getNonce = async (
  variables: GenerateNonceVariables
): Promise<NonceReturn> => {
  const response = await request(
    "http://localhost:8000/graphql",
    gql`
      mutation auth($address: String!) {
        GenerateNonce(address: $address)
      }
    `,
    variables
  );

  console.log({ response });

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

  const signMessage = async () => {
    const nonce = "iPledgeToApe";

    const signer = library.getSigner();
    const sig = await signer.signMessage(nonce);

    return sig;
  };

  const mutation = useMutation(getNonce, {
    onError: async (err) => {
      const sig = await signMessage();
      console.log({ sig });

      document.cookie = "jwt=0xiPledgeToApe;";

      toast.closeAll();

      toastIdRef.current = toast({
        title: "Successful Connection",
        duration: 3000,
        status: "success",
        position: "top",
        isClosable: true,
      });
    },
    onSuccess: ({ data }) => {
      console.log({ data });
    },
  });

  const { mutate } = mutation;

  // check if we're connected to the server
  useEffect(() => {
    async function getAuthorization(): Promise<void> {
      try {
        const isAuthorized = await injected.isAuthorized();

        // if user is logged in to MM and has not yet authenticated with server
        if (isAuthorized && networkActive && loaded && !networkError && !jwt) {
          await mutate({ address: account });
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
    mutate,
  ]);

  if (loaded) {
    return children;
  }
  return <>Loading</>;
}

export default MetamaskProvider;
