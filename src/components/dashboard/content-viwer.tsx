import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

import ReactMarkdown from "react-markdown";
type ContentViwerProps = {
  content: string;
};

export default function ContentViewer({ content }: ContentViwerProps) {
  const handelCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      toast.success("Content copied to clipboard");
    } catch (e) {
      console.log(e, "error accurated");
      toast.error("Error occurred while copying content");
    }
  };

  return (
    <Card>
      <CardContent className="p-4 md:p-6 lg:p-8">
        <div className="prose lg:prose-xl">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2 justify-end ">
        <Button type="submit" className="w-full">
          Share
        </Button>
        <Button variant="outline" className="w-full" onClick={handelCopy}>
          Copy
        </Button>
        <Button variant="outline" className="w-full">
          Rate
        </Button>
      </CardFooter>
    </Card>
  );
}
