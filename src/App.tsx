import React, { useState } from "react";
import { Button, chakra, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import SplitView from "./components/SplitView";
import theme from "./theme";
import CollectionList from "./components/CollectionList/index";
import dimensions from "./Shared/utils/dimensions";
import collections from "./collections.json";
import Collection from "./Shared/Interfaces/collection";
import WatchList from "./Shared/Interfaces/WatchList";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

function App() {
  const collectionData: Collection[] = collections.slice(0, 10);

  const [watchLists, setWatchLists] = useState<{ [id: number]: WatchList }>({
    0: {
      id: 0,
      name: "Trending Collections",
      collections: collectionData.map((col) => col.id),
    },
  });

  const [signature, setSignature] = useState("");

  const {
    active: networkActive,
    error: networkError,
    library,
    account,
  } = useWeb3React();

  const [activeWatchList, setActiveWatchList] = useState(watchLists[0].id);

  const currentWatchList = watchLists[activeWatchList];

  const filteredCollections = collectionData.filter(
    (col) =>
      currentWatchList &&
      currentWatchList.collections.find((wlId) => wlId === col.id)
  );

  const handleSign = () => {
    if (library && account && networkActive && !networkError) {
      try {
        const signer = library.getSigner();
        const sig = signer
          .signMessage(process.env.REACT_APP_SECRET_PHRASE)
          .then(setSignature);

        setSignature(sig);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleRecover = async () => {
    const recovered = await ethers.utils.verifyMessage(
      process.env.REACT_APP_SECRET_PHRASE || "",
      signature
    );

    console.log({ recovered, account, signature });
  };

  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Header />
        <chakra.main
          height={`calc(100vh - ${dimensions.headerHeight}px)`}
          overflow="hidden"
        >
          <SplitView
            left={
              <Navigation
                activeWatchList={activeWatchList}
                setActiveWatchList={setActiveWatchList}
                watchLists={watchLists}
                setWatchLists={setWatchLists}
              />
            }
            right={
              <>
                <Button onClick={handleSign}>Sign</Button>
                <Button onClick={handleRecover}>Recover</Button>
                <CollectionList
                  collections={filteredCollections}
                  watchLists={watchLists}
                  setWatchLists={setWatchLists}
                />
              </>
            }
            align="flex-start"
          />
        </chakra.main>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
