import { useState } from "react";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Loader2Icon } from "lucide-react";

const ContentCreate = () => {
  const [isLoading, setisLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setisLoading(true);
    console.log(form);
  };

  const handelChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold">Article Writer</h1>
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
    </div>
  );
};

export default ContentCreate;
