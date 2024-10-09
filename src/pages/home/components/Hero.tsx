import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";

const Hero = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-full px-8 pt-8 pb-16 overflow-hidden bg-background">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
        <div className="z-10 font-medium tracking-tighter text-center text-black whitespace-pre-wrap dark:text-white">
          <div className="text-neutral-800 dark:text-white">ThreadZ</div>
          <h1 className="text-2xl font-semibold leading-snug text-neutral-950 dark:text-white">
            Create, Share, <br /> and Spark Conversations
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
