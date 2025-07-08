import { IoAddCircleOutline } from "react-icons/io5";
import PromptHistory from "./prompt-history";
import { useAppContext } from "../../context/app.context";
import { Loader2Icon } from "lucide-react";
import { UseContentContext } from "../../context/content.context";

const Sidebar = () => {
  const { sideBarOpen } = useAppContext();
  const { generatingContent, getPrompsHistory } = UseContentContext();
  const historyItems = getPrompsHistory();
  const classes = sideBarOpen ? "w-1/2 border-r p-2 " : "w-0";
  return (
    <nav
      className={`transition-all duration-500 overflow-x-hidden md:w-80 md:border-r h-screen md:p-4 ${classes}`}
    >
      <div className=" flex justify-between items-center">
        <h1 className="text-xl font-semibold ">AI Writer</h1>
        {generatingContent ? (
          <Loader2Icon className="animate-spin" />
        ) : (
          <button className="cursor-pointer">
            <IoAddCircleOutline />
          </button>
        )}
      </div>
      <PromptHistory items={historyItems} />
    </nav>
  );
};

export default Sidebar;
