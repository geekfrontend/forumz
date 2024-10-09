import { useNavigate } from "react-router-dom";
import { FiArrowLeft as BackIcon } from "react-icons/fi";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  isBackButton?: boolean;
}

const PageHeader = ({ title, isBackButton = false }: PageHeaderProps) => {
  const navigation = useNavigate();

  return (
    <>
      <div className="relative flex items-center justify-center w-full px-8 pt-8 pb-16 overflow-hidden bg-background">
        {isBackButton && (
          <div className="absolute left-4">
            <Button
              size="icon"
              variant="outline"
              className="rounded-full"
              onClick={() => navigation(-1)}
            >
              <BackIcon size={18} />
            </Button>
          </div>
        )}
        <div className="z-10 font-medium tracking-tighter text-center text-black whitespace-pre-wrap dark:text-white">
          <h3 className="text-xl font-semibold leading-snug text-neutral-950 dark:text-white">
            {title}
          </h3>
        </div>
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
      </div>
    </>
  );
};

export default PageHeader;
