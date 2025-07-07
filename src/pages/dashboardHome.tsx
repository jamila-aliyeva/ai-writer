import { useState } from "react";

import ContentViewer from "../components/dashboard/content-viwer";
import ContentCreate from "../components/dashboard/content-create";

import { UseContentContext } from "../context/content.context";
import type { TContentCreateParams } from "../shared/types/content-create-params";

const DashboardHome = () => {
  const { generateContent, generatingContent } = UseContentContext();
  const [content, setContent] = useState<string | null>(null);

  const handleSubmit = async (params: TContentCreateParams) => {
    const content = await generateContent(params);
    setContent(content);
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
