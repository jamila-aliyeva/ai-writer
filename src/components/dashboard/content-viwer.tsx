import { Button } from "../ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import ReactMarkdown from "react-markdown";
type ContentViwerProps = {
  content: string;
};

export default function ContentViewer({ content }: ContentViwerProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="prose lg:prose-xl">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2 justify-end ">
        <Button type="submit" className="w-full">
          Share
        </Button>
        <Button variant="outline" className="w-full">
          Copy
        </Button>
        <Button variant="outline" className="w-full">
          Rate
        </Button>
      </CardFooter>
    </Card>
  );
}
