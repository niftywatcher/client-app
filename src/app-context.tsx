import * as React from "react";

type WatchList = {
  id: string;
  order: number;
  name: string;
  slug: string;
};

type State = {
  loading: boolean;
  user: {
    watchLists?: {
      [id: string]: WatchList;
    };
  };
};

const initialState: State = {
  loading: false,
  user: {
    // watchLists: null,
    // watchLists: {
    //   0: {
    //     id: 0,
    //     order: 0,
    //     name: "Trending Collections",
    //     slug: "trending",
    //   },
    // },
  },
};

const AppContext = React.createContext<
  | { state: State; setState: React.Dispatch<React.SetStateAction<State>> }
  | undefined
>(undefined);

function AppProvider({ children }: { children: JSX.Element }) {
  const [state, setState] = React.useState(initialState);

  const store = React.useMemo(() => ({ state, setState }), [state]);

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}

function useAppState() {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within a AppProvider");
  }
  return context;
}

export { AppProvider, useAppState };
