"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import Image from "next/image";

const ArtworkCard = () => {
  const [like, setLike] = useState(false)
  return (
    <Card
      sx={{
        borderRadius: 0,
        border: "1px solid #d5d1d1",
        position: "relative",
        overflow: "visible",
        boxShadow: "none",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="220"
          image="/images/thumb.jpg"
          alt="Artwork"
         loading="lazy"
        />
        <Box 
          sx={{
            backgroundColor: "#fff",
            borderRadius: "100px",
            width: "25px",
            height: "25px",
            position: "absolute",
            top: "10px",
            right: "10px",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
      >
          <Image
            src="/images/save.svg"
            alt="My Website Logo"
            width={13}
            height={13}
          />
          <span onClick={()=> setLike(!like)} style={{color: like ? "red": "gray", fontSize:"20px"}}>♥</span>
        </Box>
      </Box>

      <CardContent sx={{ textAlign: "left" }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          Breeze
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Acrylic on Canvas
        </Typography>
        <Typography variant="body2" color="text.secondary">
          98x91cm
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 400, mt: 1, color:"#65635F", fontStyle:"italic" }}>
          ₹178,500
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArtworkCard;
