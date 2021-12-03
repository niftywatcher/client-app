import React from "react";
import { BrowserRouter, Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Trending from "./routes/WatchList/Trending";
import Layout from "./routes/index";

function App() {
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
          <Route path="collections">
            <Route
              path=":collectionId"
              element={<div>Searchable collections go here</div>}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
