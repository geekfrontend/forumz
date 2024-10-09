import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  HiHandThumbDown,
  HiHandThumbUp,
  HiMiniChatBubbleLeftRight,
} from "react-icons/hi2";

interface ThreadCardProps {
  title: string;
  body: string;
  category: string;
  createdAt: string;
  upVotes: number;
  downVotes: number;
  totalComments: number;
  owner: {
    username: string;
    avatarUrl: string;
  };
}

const ThreadCard: React.FC<ThreadCardProps> = ({
  title,
  body,
  category,
  createdAt,
  upVotes,
  downVotes,
  totalComments,
  owner,
}) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between">
            <div className="flex items-center">
              <Avatar>
                <AvatarImage src={owner.avatarUrl} />
                <AvatarFallback>{owner.username[0]}</AvatarFallback>
              </Avatar>

              <div className="ml-2.5 text-sm leading-tight">
                <span className="block font-bold text-black dark:text-white ">
                  {owner.username}
                </span>
              </div>
            </div>
          </div>
        </CardTitle>
        <CardDescription className="mt-1">
          <Badge variant="outline">{category}</Badge>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h4>{title}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">{body}</p>
        <p className="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">
          {new Date(createdAt).toLocaleString()}
        </p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <div className="flex text-gray-500 dark:text-gray-400"></div>
        <div className="flex items-center">
          <Button variant="ghost" className="rounded-full" size="icon">
            <HiHandThumbUp />
          </Button>
          <span className="ml-2">{upVotes}</span>
        </div>
        <div className="flex items-center">
          <Button variant="ghost" className="rounded-full" size="icon">
            <HiHandThumbDown />
          </Button>
          <span className="ml-2">{downVotes}</span>
        </div>
        <div className="flex items-center">
          <Button variant="ghost" className="rounded-full" size="icon">
            <HiMiniChatBubbleLeftRight />
          </Button>
          <span className="ml-2">{totalComments}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ThreadCard;
