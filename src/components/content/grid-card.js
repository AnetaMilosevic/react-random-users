import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { formatDate, hideEmail } from "../../helpers";

export default function GridCard(props) {
  return (
    <Card sx={{ width: "30%" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image={props.user.picture.large}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="body2" color="text.secondary">
          name: {props.user.name.first}.{hideEmail(props.user.email)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          date of birth: {formatDate(props.user.dob.date)}
        </Typography>
      </CardContent>
    </Card>
  );
}
