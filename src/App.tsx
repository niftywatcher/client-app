import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Trending from "./routes/WatchList/Trending";
import Layout from "./routes/index";
import CollectionDetail from "./routes/Collection/Detail";
import { useAppStartupQuery } from "./generated";
import graphqlRequestClient from "./lib/graphqlRequestClient";
import { useAppState } from "./app-context";
import { isNil } from "lodash";

function App() {
  const { state: appState, setState: setAppState } = useAppState();
  const { data, isLoading } = useAppStartupQuery(graphqlRequestClient);

  useEffect(() => {
    if (isLoading) {
      setAppState((prevState) => ({ ...prevState, loading: true }));
    }

    if (data && data.user) {
      setAppState(() => {
        const { user } = data;

        const { trending, watchLists } = user || {};

        return {
          loading: false,
          user: {
            watchLists: [trending].concat(watchLists).reduce((a, b) => {
              if (!isNil(b) && b.id) {
                a[b.id] = b;
              }

              return a;
            }, {} as { [id: string]: any }),
          },
        };
      });
    }
  }, [isLoading, data, setAppState]);

  console.log({ appState });
  // const { data, isLoading } = useAppStartupQuery(graphqlRequestClient);

  // if (isLoading) {
  //   setAppState((prevState) => ({ ...prevState, loading: true }));
  // }

  // if (data && data.user) {
  //   setAppState(() => {
  //     const { user } = data;

  //     const { trending, watchLists } = user || {};

  //     return {
  //       loading: false,
  //       user: {
  //         watchLists: [trending].concat(watchLists).reduce((a, b) => {
  //           if (!isNil(b) && b.id) {
  //             a[b.id] = b;
  //           }

  //           return a;
  //         }, {} as { [id: string]: any }),
  //       },
  //     };
  //   });
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Navigate replace to="/watchLists/trending" />}
          />
          <Route path="watchLists">
            <Route index element={<Navigate to="trending" />} />
            <Route path=":watchList" element={<div>New trends</div>} />
            <Route path="trending" element={<Trending />} />
          </Route>
          <Route path="collection">
            <Route path=":address" element={<CollectionDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
