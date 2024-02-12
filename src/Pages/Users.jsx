/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import UserCards from "../Components/UserCards";
import Typography from "@mui/material/Typography";

const url = "https://api.github.com/users";
export const loader = async () => {
  const response = await axios.get(url);
  const userData = await Promise.all(
    response.data.map(async (user) => {
      const userDetails = await axios.get(url + `/${user.login}`);
      return userDetails;
    })
  );
  return { userData };
};

const Users = () => {
  return (
    <div>
      <Typography
        variant="h2"
        component="div"
        sx={{
          color: "#f2f2f2",
          padding: "2rem 0",
          textAlign: "center",
        }}
      >
        List of Git Users
      </Typography>
      <UserCards />
    </div>
  );
};

export default Users;
