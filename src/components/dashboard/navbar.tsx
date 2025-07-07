import { IoArrowBack } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { useAppContext } from "../../context/app.context";
const Navbar = () => {
  const { toggleSideBar } = useAppContext();
  return (
    <div className="border-b">
      <nav className="flex justify-between items-center h-16 p-4">
        <div className="flex items-center gap-2">
          <Button
            className="block md:hidden"
            variant="outline"
            onClick={toggleSideBar}
          >
            <IoArrowBack className="w-4 h-4 " />
          </Button>
          <h4 className="text-xl font-semibold">Dashboard</h4>
        </div>
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger>Jamila</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
