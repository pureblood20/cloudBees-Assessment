import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Unstable_Grid2";
import { useLoaderData, Link } from "react-router-dom";

function UserCards() {
  const { userData } = useLoaderData();
  return (
    <>
      <Grid container spacing={4}>
        {userData.map((item) => {
          const avatar = item.data.avatar_url;
          const username = item.data.login;
          const name = item.data.name;
          return (
            <Grid xs={6} md={3} sm={4} key={item.id}>
              <Card
                sx={{ maxWidth: 300 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  padding: "2rem 1rem",
                  backgroundColor: "#1c1917",
                  color: "#F2F2F2",
                  borderRadius: "0.8rem",
                }}
              >
                <Avatar
                  alt="user Profile"
                  src={avatar}
                  sx={{ width: 100, height: 100 }}
                />
                <CardContent
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "column",
                  }}
                >
                  <Typography gutterBottom variant="h5" component="span">
                    {username}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="p"
                    component="div"
                    style={{ color: "rgb(148 163 184)" }}
                  >
                    {name ? name : username}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={`/user/${username}`}>
                    <Button
                      variant="outlined"
                      color="success"
                      style={{
                        backgroundColor: "#e11d48",
                        color: "#F2F2F2",
                        borderColor: "#262626",
                      }}
                    >
                      View Profile
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default UserCards;
