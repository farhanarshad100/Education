import { Box, Container, Typography, IconButton } from "@mui/material";
import Slider from "react-slick";
import ArtworkCard from "../Card";
import React, { useRef } from "react";

const Alsolike = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="alsoLike" style={{ padding: "0px 0 70px 0" }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1400px",
          position: "relative",
        }}
      >
        {/* ✅ Title + Arrows in One Row */}
        <Box
          sx={{
            paddingBottom: "45px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontSize: "32px", fontWeight: 600 }}
          >
            You might like
          </Typography>

          {/* ✅ Custom Arrows beside title */}
          <Box sx={{display:"flex"}}>
            <Box
              onClick={handlePrev}
              sx={{
                background:"#E8E5E5",
                width:"40px",
                height:"40px",
                borderRadius:"5px",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                mr: 2,
                cursor:"pointer",
                "&:hover": { backgroundColor: "#f0f0f0" },
              }}
            >
                <img src="/images/left.svg" alt=""/>
            </Box>
            <Box
              onClick={handleNext}
               sx={{
                background:"#E8E5E5",
                width:"40px",
                height:"40px",
                borderRadius:"5px",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                cursor:"pointer",
                mr: 1,
                "&:hover": { backgroundColor: "#f0f0f0" },
              }}
            >
                <img src="/images/right-arrow.svg" alt=""/>
            </Box>
          </Box>
        </Box>

        {/* ✅ Slick Slider */}
        <Slider ref={sliderRef} {...settings}>
          <ArtworkCard />
          <ArtworkCard />
          <ArtworkCard />
          <ArtworkCard />
          <ArtworkCard />
        </Slider>
      </Container>
    </section>
  );
};

export default Alsolike;
