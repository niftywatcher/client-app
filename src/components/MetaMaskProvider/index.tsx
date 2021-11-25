import React, { useEffect, useState } from "react";
import { injected } from "../../Shared/utils/connector";
import { useWeb3React } from "@web3-react/core";
import { getCookie } from "../../Shared/utils";

/**
 * This provider helps you stay connected when you leave the page. It was inspired by this solution: https://www.reddit.com/r/ethdev/comments/nw7iyv/displaying_connected_wallet_after_browser_refresh/h5uxl88/?context=3
 * TODO: need to checkout uniswap way of handling this provider: https://github.com/Uniswap/interface/blob/13d7d2c99235aacd199641a9bfcae8aa6f7d94ae/src/components/Web3ReactManager/index.tsx#L22
 */

function MetamaskProvider({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const {
    active: networkActive,
    error: networkError,
    activate: activateNetwork,
    library,
  } = useWeb3React();

  const [loaded, setLoaded] = useState(false);

  const disconnect = window.localStorage.getItem("disconnect");
  const jwt = getCookie("jwt");

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

  useEffect(() => {
    async function getAuthorization(): Promise<void> {
      try {
        const isAuthorized = await injected.isAuthorized();

        // if user is logged in to MM and has not yet authenticated with server
        console.log({
          isAuthorized,
          networkActive,
          loaded,
          networkError,
          disconnect,
          jwt,
        });
        if (isAuthorized && networkActive && loaded && !networkError && !jwt) {
          // 1.fetch nonce
          const nonce = process.env.REACT_APP_SECRET_PHRASE;

          // 2. sign nonce and send back to server with signature
          const signer = library.getSigner();
          const sig = await signer.signMessage(nonce);
          console.log({ sig });

          // 3. check for jwt token, but we'll set it here instead
          document.cookie = "jwt=0xiPledgeToApe;";
        }
      } catch (err) {
        console.log(err);
      }
    }

    getAuthorization();
  }, [networkActive, networkError, disconnect, library, loaded, jwt]);

  /**
   * 1. on failure of signature display error message
   * 2. on connect, make the user sign the message and set jwt token
   * 3.
   */

  if (loaded) {
    return children;
  }
  return <>Loading</>;
}

export default MetamaskProvider;