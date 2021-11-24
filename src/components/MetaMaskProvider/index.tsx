import React, { useEffect, useState } from "react";
import { injected } from "../../Shared/utils/connector";
import { useWeb3React } from "@web3-react/core";

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
  } = useWeb3React();

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    injected
      .isAuthorized()
      .then(async (isAuthorized) => {
        setLoaded(true);
        const disconnect = window.localStorage.getItem("disconnect");

        if (isAuthorized && !networkActive && !networkError && !disconnect) {
          activateNetwork(injected);
        }
      })
      .catch(() => {
        setLoaded(true);
      });
  }, [activateNetwork, networkActive, networkError]);

  // useEffect(() => {
  //   injected.isAuthorized().then((isAuthorized) => {
  //     if (
  //       isAuthorized &&
  //       networkActive &&
  //       !networkError &&
  //       library &&
  //       account
  //     ) {
  //       if (library && account && loaded) {
  //         // const nounce = await mock(true, 1000);

  //         library.eth
  //           .sign(library.utils.utf8ToHex("Hello world"), account)
  //           .then((sig: any) => console.log(sig));
  //       }
  //     }
  //   });
  // }, [networkActive, networkError, library, account, loaded]);

  if (loaded) {
    return children;
  }
  return <>Loading</>;
}

export default MetamaskProvider;
