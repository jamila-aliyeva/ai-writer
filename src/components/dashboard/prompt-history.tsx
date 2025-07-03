import { Link } from "react-router";
import type { TPromptType } from "../../shared/types/promptTypes";

type PromptHistoryProps = {
  items: TPromptType[];
};

const PromptHistory = ({ items }: PromptHistoryProps) => {
  return (
    <nav className="mt-8">
      {items.map((item) => (
        <div key={item.date} className="mb-4">
          <h5 className="text-sm text-gray-500 font-semibold">{item.date}</h5>
          <nav className="mt-2">
            {item.links.map((link) => (
              <Link
                key={link.url}
                to={link.ulr}
                className="flex items-center rounded-md px-3 py-2 font-medium hover:bg-gray-100 "
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      ))}
    </nav>
  );
};

export default PromptHistory;
