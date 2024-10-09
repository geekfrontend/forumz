import { useNavigate } from "react-router-dom";
import { FiArrowLeft as BackIcon } from "react-icons/fi";

interface PageHeaderProps {
  title: string;
  isBackButton?: boolean;
}

const PageHeader = ({ title, isBackButton = false }: PageHeaderProps) => {
  const navigation = useNavigate();

  return (
    <div className=" flex gap-5 items-center bg-[url('https://preline.co/assets/svg/examples/abstract-bg-1.svg')] bg-no-repeat bg-cover bg-center pt-8 px-8 pb-16">
      {isBackButton && (
        <div
          className="absolute p-2 bg-white rounded-full cursor-pointer"
          onClick={() => navigation(-1)}
        >
          <BackIcon size={20} />
        </div>
      )}
      <div className="flex-grow font-medium text-center">{title}</div>
    </div>
  );
};

export default PageHeader;
