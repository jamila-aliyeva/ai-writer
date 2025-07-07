// import { useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../ui/button";
import type { ContentCreateParams } from "../../shared/types/content-create-params";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Loader } from "lucide-react";

type ContentCreateProps = {
  isLoading: boolean;
  onSubmit: (params: ContentCreateParams) => void;
};

const formSchema = z.object({
  title: z.string().min(5).max(50),
  description: z.string().min(50).max(1000),
});

const ContentCreate = ({ isLoading, onSubmit }: ContentCreateProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    onSubmit(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-2 md:space-y-4  mt-2 md:mt-4"
      >
        <FormField
          control={form.control}
          name="title"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="React Js" {...field} />
              </FormControl>
              <FormDescription>
                Please, enter the title of the content.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Write about React Js..." {...field} />
              </FormControl>
              <FormDescription>
                Please, enter the description of the content.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} type="submit">
          {isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
          Generate
        </Button>
      </form>
    </Form>
  );
};

export default ContentCreate;
