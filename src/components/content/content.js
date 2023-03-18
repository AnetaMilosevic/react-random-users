import { Container } from "@mui/material";
import data from "../../assets/RandomUsers.json";
import GridCard from "./grid-card";
import ListItem from "./list-item";

export const Content = (props) => {
  console.log(props);
  return (
    <Container
      maxWidth="lg"
      sx={
        props.isGrid && {
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          pt: 2,
          pb: 2,
        }
      }>
      {data.results.map((user) =>
        props.isGrid ? <GridCard user={user} /> : <ListItem user={user} />
      )}
    </Container>
  );
};
