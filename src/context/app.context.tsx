import { createContext, useContext, useState } from "react";

interface IAppContext {
  generatingContent: boolean;
  setGeneratingContent: (value: boolean) => void;
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
  const [generatingContent, setGeneratingContent] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <AppContext.Provider
      value={{
        generatingContent,
        setGeneratingContent,
        toggleSideBar,
        sideBarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, useAppContext, AppContextProvider };
