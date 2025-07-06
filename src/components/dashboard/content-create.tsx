import { useState } from "react";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Loader2Icon } from "lucide-react";
// import { generateContent } from "../../utils/openai";
// import ContentViewer from "./content-viwer";
import type { ContentCreateParams } from "../../shared/types/content-create-params";

type ContentCreateProps = {
  isLoading: boolean;
  onSubmit: (params: ContentCreateParams) => void;
};

const ContentCreate = ({ isLoading, onSubmit }: ContentCreateProps) => {
  const [form, setForm] = useState<ContentCreateParams>({
    title: "",
    description: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
  };

  const handelChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setForm({ ...form, [name]: value });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="grid w-full  items-center gap-3 mt-5">
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          placeholder="Title"
          name="title"
          onChange={handelChange}
          disabled={isLoading}
        />
      </div>
      <div className="grid w-full gap-3 mt-5 mb-5">
        <Label htmlFor="description">Description</Label>
        <Textarea
          placeholder="Type your description here."
          id="description"
          name="description"
          onChange={handelChange}
          disabled={isLoading}
        />
      </div>
      <Button disabled={isLoading}>
        {isLoading && <Loader2Icon className="animate-spin" />}
        Generate
      </Button>
    </form>
  );
};

export default ContentCreate;
