import { useState } from "react";
import { generateContent } from "../utils/openai";
import ContentViewer from "../components/dashboard/content-viwer";
import ContentCreate from "../components/dashboard/content-create";
import type { ContentCreateParams } from "../shared/types/content-create-params";
import { useAppContext } from "../context/app.context";

const DashboardHome = () => {
  const { generatingContent, setGeneratingContent } = useAppContext();
  const [content, setContent] = useState<string | null>(null);

  const handleSubmit = async (params: ContentCreateParams) => {
    setGeneratingContent(true);
    const { title, description } = params;
    try {
      const result = await generateContent(title, description);
      setContent(result);
    } catch (e) {
      console.log(e, "error accurated");
    } finally {
      setGeneratingContent(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Article Writer</h1>
      {content ? (
        <ContentViewer content={content} />
      ) : (
        <ContentCreate isLoading={generatingContent} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default DashboardHome;
