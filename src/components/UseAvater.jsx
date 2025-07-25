import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const UseAvater = ({ user }) => {
  return (
    <li className="mx-6 text-[18px] cursor-pointer">
      <Avatar className="w-12 h-12">
         {user?.image && (
        <AvatarImage
          className="border-2 border-amber-100"
          src={user?.image}
          alt={user?.name || "User"}
        />
      )}

        <AvatarFallback className="bg-amber-500 text-white font-semibold ">
          {user?.name
            ? user.name
                .split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()
            : "U"}
        </AvatarFallback>
      </Avatar>
    </li>

  );
};

export default UseAvater;
