"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Box, Stack, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductGallery = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const images = [
    "/images/gallery2.jpg",
    "/images/gallery2.jpg",
    "/images/gallery2.jpg",
    "/images/gallery2.jpg",
  ];

  const mainSettings = {
    asNavFor: nav2,
    ref: (slider) => setNav1(slider),
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
  };

  const thumbSettings = {
    asNavFor: nav1,
    ref: (slider) => setNav2(slider),
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    vertical: true,
    arrows: false,
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 0,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft:"54px"
   
      }}
    >
      <Box sx={{ width: 90 }}>
        <Slider {...thumbSettings}>
          {images.map((img, i) => (
            <Box
              key={i}
              sx={{
                borderRadius: "2px",
                overflow: "hidden",
                padding:"10px",
                cursor: "pointer",
                border:
                  activeIndex === i
                    ? "1px solid #D2CFC8"
                    : "1px solid transparent",
                transition: "border-color 0.3s",
                "&:hover": { borderColor: "#1976d2" },
              }}
            >
              <Image
                src={img}
                alt={`Thumbnail ${i}`}
                width={65}
                height={40}
              />
            </Box>
          ))}
        </Slider>
      </Box>

  
      <Box sx={{ width: "100%", marginLeft:"60px" }}>
        <Slider {...mainSettings}>
          {images.map((img, i) => (
            <Box key={i}>
              <Image
                src={img}
                alt={`Main Image ${i}`}
                width={600}
                height={600}
               style={{width:"100%", height:"600px", objectFit:"fill"}}
              />
            </Box>
          ))}
        </Slider>
         <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 2 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
           <img src="/images/view.svg" alt=""/>
            <Typography variant="body2">View in a room</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
           <img src="/images/share.svg" alt=""/>
            <Typography variant="body2">Share</Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductGallery;
