import { useState } from "react";
import { generateContent } from "../utils/openai";
import ContentViewer from "../components/dashboard/content-viwer";
import ContentCreate from "../components/dashboard/content-create";
import type { ContentCreateParams } from "../shared/types/content-create-params";

const DashboardHome = () => {
  const [isLoading, setisLoading] = useState(false);
  const [content, setContent] = useState<string | null>(null);

  const handleSubmit = async (params: ContentCreateParams) => {
    setisLoading(true);
    const { title, description } = params;
    const result = await generateContent(title, description);
    setContent(result);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Article Writer</h1>
      {content ? (
        <ContentViewer content={content} />
      ) : (
        <ContentCreate isLoading={isLoading} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default DashboardHome;
