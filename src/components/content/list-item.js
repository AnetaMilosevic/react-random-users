import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { formatDate, hideEmail } from "../../helpers";
import { ImageAvatar } from "./avatar";

export default function ListItem(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent sx={{ display: "flex" }}>
        <ImageAvatar url={props.user.picture.thumbnail} />
        <div style={{ marginLeft: "10px" }}>
          <Typography variant="body2">name: {props.user.name.first}</Typography>
          <Typography variant="body2">
            email: {hideEmail(props.user.email)}
          </Typography>
          <Typography variant="body2">
            date of birth: {formatDate(props.user.dob.date)}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
