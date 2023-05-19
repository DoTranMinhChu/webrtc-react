import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const NameInput: React.FC = () => {
  const { userName, setUserName } = useContext(UserContext);
  const handleChange = (e: any) => {
    setUserName(e.target.value);
  };
  return (
    <input
      className="w-full h-10 p-2 my-2 border rounded-md"
      placeholder="Enter your name"
      onChange={handleChange}
      value={userName}
    />
  );
};
