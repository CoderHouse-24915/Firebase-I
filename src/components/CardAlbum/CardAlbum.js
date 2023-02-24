import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardAlbum = ({ dataAlbum }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" image={dataAlbum.img} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {dataAlbum.artist}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {dataAlbum.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {dataAlbum.year} | {dataAlbum.genre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {dataAlbum.price} | stock: {dataAlbum.stock}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardAlbum;
