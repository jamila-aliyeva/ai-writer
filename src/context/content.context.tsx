import { createContext, useContext, useState, type ReactNode } from "react";
import type { TContentCreateParams } from "../shared/types/content-create-params";
import toast from "react-hot-toast";
import type { TGeneratedContent } from "../shared/types/generated-content";
import { useLocalStorage } from "react-use";
import type { TPromptLinks } from "../shared/types/promptTypes";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

interface IContentContext {
  generatingContent: boolean;
  setGeneratingContent: (value: boolean) => void;
  generateContent: (params: TContentCreateParams) => Promise<string | null>;
  getPrompsHistory: () => { date: string; links: TPromptLinks[] }[];
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
  const [contentItems, setContentItems] = useLocalStorage<TGeneratedContent[]>(
    "contentitems",
    []
  );

  const generateContent = async (params: TContentCreateParams) => {
    let content = null;
    getPrompsHistory();
    setGeneratingContent(true);
    const { title, description } = params;
    try {
      content = await generateContent(title, description);

      const generatedContentItems: TGeneratedContent = {
        id: uuidv4(),
        content,
        title,
        description,
        date: new Date(),
      };
      setContentItems([generatedContentItems, ...(contentItems || [])]);
    } catch (e) {
      console.log(e, "error accurated");
      toast.error("Error occurred while generating content");
    } finally {
      setGeneratingContent(false);
    }
    return content;
  };
  const getPrompsHistory = () => {
    if (!contentItems) {
      return [];
    }
    const groupedItems = contentItems.reduce(
      (prev: { [date: string]: TPromptLinks[] }, next) => {
        const date = dayjs(next.date).format("DD-MM-YYYY");
        if (!prev[date]) {
          prev[date] = [];
        }
        prev[date].push({
          title: next.title,
          url: `/dashboard/content/${next.id}`,
        });
        return prev;
      },
      {} as { [date: string]: TPromptLinks[] }
    );
    return Object.keys(groupedItems)
      .sort((a, b) => dayjs(b).diff(a))
      .map((date) => {
        return {
          date,
          links: groupedItems[date],
        };
      });
  };

  return (
    <ContentContext.Provider
      value={{
        generatingContent,
        setGeneratingContent,
        generateContent,
        getPrompsHistory,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export { UseContentContext, ContentContextProvider };
