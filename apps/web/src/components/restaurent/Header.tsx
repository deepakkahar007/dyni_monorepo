import { Home } from "lucide-react";
import { Avatar } from "../ui/avatar";
import { Separator } from "../ui/separator";

const RestaurentHeader = () => {
	return (
		<header>
			<div className="flex flex-row items-center justify-between p-2">
				<Home />
				<Avatar className="border" />
			</div>

			<Separator />
		</header>
	);
};

export default RestaurentHeader;
