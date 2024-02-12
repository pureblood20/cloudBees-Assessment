/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { useLoaderData, Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Stack } from "@mui/material";
import StackInfo from "../Components/StackInfo";

import BusinessIcon from "@mui/icons-material/Business";
import XIcon from "@mui/icons-material/X";

import GitHubIcon from "@mui/icons-material/GitHub";

const url = "https://api.github.com/users";
export const loader = async (data) => {
  const username = data.params.name;
  const response = await axios.get(url + `/${username}`);
  const userDetail = response.data;
  return { userDetail };
};
const UserDetails = () => {
  const { userDetail } = useLoaderData();

  const {
    avatar_url: avatar,
    login: username,
    name,
    followers,
    following,
    public_repos: repos,
    company,
    html_url: gitUrl,
    twitter_username: twitterUserName,
  } = userDetail;

  return (
    <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "5rem 2rem" }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ color: "#94a3b8" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#94a3b8",
          }}
        >
          <Typography sx={{ textTransform: "capitalize" }}>Users</Typography>
        </Link>

        <Typography sx={{ textTransform: "capitalize", color: "#f2f2f2" }}>
          {username}
        </Typography>
      </Breadcrumbs>
      <Stack
        spacing={{ xs: 1, sm: 4, md: 6 }}
        direction="row"
        useFlexGap
        gap={"8rem"}
        flexWrap="wrap"
        sx={{
          marginTop: "1.5rem",
        }}
      >
        <Avatar
          alt="user Profile"
          src={avatar}
          sx={{ width: 400, height: 400 }}
          variant="square"
          style={{ borderRadius: "1rem" }}
        />

        <Stack
          direction={"column"}
          spacing={{ xs: 1, sm: 1, md: 2 }}
          alignItems={"flex-start"}
          justifyContent={"center"}
        >
          <Typography
            variant="h2"
            component="span"
            sx={{ color: "#f2f2f2", textTransform: "capitalize" }}
          >
            {name ? name : username}
          </Typography>
          <Typography variant="h5" component="div" sx={{ color: "#94a3b8" }}>
            {username}
          </Typography>
          <Stack direction={"row"} alignItems={"center"} gap={"5rem"}>
            <StackInfo stackValue={followers} label="Followers" />
            <StackInfo stackValue={following} label="Following" />
            <StackInfo stackValue={repos} label="Total Repos" />
          </Stack>
          {company && (
            <div style={{ display: "flex" }}>
              <BusinessIcon
                sx={{
                  color: "#e11d48",
                  marginRight: "1rem",
                  marginBottom: "1rem",
                }}
                fontSize={"large"}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{ color: "#94a3b8" }}
              >
                {company}
              </Typography>
            </div>
          )}

          <div style={{ display: "flex" }}>
            {twitterUserName && (
              <Link
                to={`https://twitter.com/${twitterUserName}?lang=en`}
                style={{
                  color: "#e11d48",
                  marginRight: "3rem",
                }}
                target="_blank"
              >
                <XIcon fontSize={"large"} />
              </Link>
            )}
            {gitUrl && (
              <Link to={gitUrl} style={{ color: "#e11d48" }} target="_blank">
                <GitHubIcon fontSize={"large"} />
              </Link>
            )}
          </div>
        </Stack>
      </Stack>
    </div>
  );
};

export default UserDetails;
