import React from "react";
import { Paper, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
function Item(props) {
  return (
    <Paper>
      <Grid container spacing={2}>
        <img src={props.item.image} width="100%" height="500px" />
      </Grid>
    </Paper>
  );
}

export default Item;
