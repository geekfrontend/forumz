import Hero from "./Hero";
import ThreadCard from "./ThreadCard";

const threads = [
  {
    id: "thread-1",
    title: "Thread Pertama",
    body: "Ini adalah thread pertama",
    category: "General",
    createdAt: "2021-06-21T07:00:00.000Z",
    owner: {
      username: "User 1",
      avatarUrl: "https://example.com/avatar1.jpg",
    },
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0,
  },
  {
    id: "thread-2",
    title: "Thread Kedua",
    body: "Ini adalah thread kedua",
    category: "General",
    createdAt: "2021-06-21T07:00:00.000Z",
    owner: {
      username: "User 2",
      avatarUrl: "https://example.com/avatar2.jpg",
    },
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0,
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <div className="z-50 min-h-screen p-6 -mt-8 bg-white pb-28 rounded-t-3xl dark:bg-black">
        <div className="grid grid-cols-1 gap-4 mt-4 place-content-center place-items-center">
          {threads.map((thread) => (
            <ThreadCard
              key={thread.id}
              title={thread.title}
              body={thread.body}
              category={thread.category}
              createdAt={thread.createdAt}
              upVotes={thread.upVotesBy.length}
              downVotes={thread.downVotesBy.length}
              totalComments={thread.totalComments}
              owner={thread.owner}
            />
          ))}
        </div>
      </div>
    </>
  );
}
