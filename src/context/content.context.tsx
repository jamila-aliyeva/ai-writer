import { createContext, useContext, useState, type ReactNode } from "react";
import type { TContentCreateParams } from "../shared/types/content-create-params";
import toast from "react-hot-toast";
import type { TGeneratedContent } from "../shared/types/generated-content";

interface IContentContext {
  generatingContent: boolean;
  setGeneratingContent: (value: boolean) => void;
  generateContent: (params: TContentCreateParams) => Promise<string | null>;
}

export const ContentContext = createContext<IContentContext | null>(null);

const UseContentContext = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error(
      "useContentContext must be used within a ContentContextProvider"
    );
  }
  return context;
};

interface IProps {
  children: ReactNode;
}

const ContentContextProvider = ({ children }: IProps) => {
  const [generatingContent, setGeneratingContent] = useState(false);

  const generateContent = async (params: TContentCreateParams) => {
    let content = null;
    setGeneratingContent(true);
    const { title, description } = params;
    try {
      content = await generateContent(title, description);

      const generatedContent: TGeneratedContent = {
        id: "12345",
        content,
        title,
        description,
        date: new Date(),
      };

      localStorage.setItem("contentItems", JSON.stringify([generatedContent]));
    } catch (e) {
      console.log(e, "error accurated");
      toast.error("Error occurred while generating content");
    } finally {
      setGeneratingContent(false);
    }
    return content;
  };
  return (
    <ContentContext.Provider
      value={{ generatingContent, setGeneratingContent, generateContent }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export { UseContentContext, ContentContextProvider };
