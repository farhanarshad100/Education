"use client";
import React from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  Container,
} from "@mui/material";
import Button from "../Button";

const ArtworkInfo = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
   <section style={{ padding: "0px 0 70px 0" }}>
        <Container
          maxWidth={false} 
          sx={{
            maxWidth: "1400px",
          }}
        >

      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="artwork info tabs"
        textColor="inherit"
        indicatorColor="primary"
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          mb: 2,
          
          
        }}
      >
        <Tab label="Information" sx={{ textTransform: "none", fontWeight: 600,fontSize:"20px", mr: 5 }} />
        <Tab label="About the artwork" sx={{ textTransform: "none", fontWeight: 600, fontSize:"20px"}} />
      </Tabs>

      {value === 0 && (
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Artwork details
          </Typography>
          <List
  
  sx={{
    mb: 2,
    listStyleType: "disc",
    pl: 2,
    "& .MuiListItem-root": {
      display: "list-item",
    },
  }}
>
            <ListItem disablePadding>
              <ListItemText primary="Medium : Acrylic on Canvas" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Other details : Unmounted artwork. Mounting and/or framing available on request." />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Dimensions : 83.8×83.8cm" />
            </ListItem>
          </List>

          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            About this artwork
          </Typography>
          <Typography
            variant="body2"
            color="#000"
            sx={{ mb: 3, lineHeight: 1.6 }}
          >
            In this acrylic painting, I’ve melded minimalism with touches of realism and
            surrealism to create a semi-abstract landscape that transcends the ordinary.
            My canvas is a symphony of vibrant hues and undulating forms, a visual poem
            where nature's beauty morphs into dreamlike splendor. Each stroke is infused
            with emotion, inviting viewers to a world of serene contemplation and boundless
            imagination. It radiates energy, a mesmerizing addition to uplift...
            <Typography
              component="span"
              sx={{ color: "primary.main", cursor: "pointer" }}
            >
              {" "}
              Read More
            </Typography>
          </Typography>

  
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
           <Button label="monu" color="green" textColor="red" borderRadius ="5px" />
          </Box>
        </Box>
      )}

     
      {value === 1 && (
        <Box>
          <Typography variant="body1">
            This tab could contain artist bio, inspiration, or process details.
          </Typography>
        </Box>
      )}
    </Container>
    </section>
  );
};

export default ArtworkInfo;
