import { createContext, useContext, useState } from "react";

interface IAppContext {
  sideBarOpen: boolean;
  toggleSideBar: () => void;
}

const AppContext = createContext<IAppContext | null>(null);

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <AppContext.Provider
      value={{
        toggleSideBar,
        sideBarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, useAppContext, AppContextProvider };
