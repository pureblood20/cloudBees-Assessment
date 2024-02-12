/* eslint-disable react/prop-types */
import { Chip, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";

const StackInfo = ({ stackValue, label }) => {
  return (
    <div>
      <Stack>
        <Chip
          label={label}
          size="medium"
          sx={{
            backgroundColor: "#e11d48",
            color: "#F2F2F2",
            borderColor: "#262626",
            marginBottom: "0.5rem",
            padding: "0.5rem",
            fontSize: "1rem",
          }}
        />
        <Typography
          gutterBottom
          variant="p"
          component="span"
          sx={{
            color: "#f2f2f2",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "1.2rem",
          }}
        >
          {stackValue}
        </Typography>
      </Stack>
    </div>
  );
};

export default StackInfo;
