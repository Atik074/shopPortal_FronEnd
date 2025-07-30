import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";



const UseAvater = () => {
  const user = JSON.parse(localStorage.getItem("user"))

  return (
   
        <Avatar className="w-full h-full rounded-full">
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
   
   
  );
};

export default UseAvater;
