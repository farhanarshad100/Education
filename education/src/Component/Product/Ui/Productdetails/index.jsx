"use client";
import { Box, Typography, Button, Stack, Divider } from "@mui/material";
import Image from "next/image";

export default function Productdetails() {
  return (
    <Box>
     
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
        <Image
            src="/images/back.svg"
            alt="My Website Logo"
            width={16}
            height={16}
            priority
          />
        <Typography variant="body2" sx={{ cursor: "pointer", color: "#333" }}>
          BACK
        </Typography>
      </Stack>

    
      <Typography variant="h4" sx={{ fontWeight: 500, mb: 1, fontSize:"40px" }}>
        Wallowing Breeze
      </Typography>
      <Typography sx={{ color: "#000", mb: 2, fontSize:"21px" }}>
        Nijesh Mohan
      </Typography>

    
      <Typography variant="body2" sx={{ color: "#65635F", lineHeight: 1.6 }}>
        Oil on canvas, 2008 <br />
        Gallery wrap canvas <br />
        26 in × 23 in
      </Typography>


      <Typography
        variant="body2"
        sx={{ color: "#65635F", mt: 2, lineHeight: 1.6 }}
      >
        Dynamic and elusive abstraction and texture. Plays<br/> between the lines of
        chaos and serenity. Perfect fit for<br/> modern and contemporary styled interiors.
      </Typography>

      <Divider sx={{ my: 3 }} />

   
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, fontSize:"24px" }}>
        ₹175,500
      </Typography>

      <Stack direction="row" spacing={1} alignItems="center">
            <Image
            src="/images/Ship.svg"
            alt="My Website Logo"
            width={16}
            height={16}
            priority
          />
        <Typography variant="body2" sx={{color:"#65635F"}}>
          Ships from India
        </Typography>
      </Stack>

      <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
       <Image
            src="/images/Estimated.svg"
            alt="My Website Logo"
            width={16}
            height={16}
            priority
          />
        <Typography variant="body2" sx={{color:"#65635F"}}>
          Estimated to ship in 3–7 days within USA
        </Typography>
      </Stack>


      <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#0052ff",
            borderRadius: "100px",
            textTransform: "none",
            px: 6,
            py:1.4,
        
            "&:hover": { backgroundColor: "#0040cc" },
          }}
        >
          Acquire This Artwork
        </Button>
        <Button
          variant="outlined"
          sx={{
              borderRadius: "100px",
            textTransform: "none",
             
             px: 4.4,
            py:1.4,
            borderColor: "#0052ff",
            color: "#0052ff",
          }}
        >
          Make An Offer
        </Button>
        <Button
          variant="outlined"
          sx={{
             borderRadius: "100px",
            textTransform: "none",
            
           px: 4.4,
            py:1.4,
            color: "#777",
            borderColor: "#ccc",
          }}
        >
          Add A Frame
        </Button>
      </Stack>

  
      <Typography
        variant="caption"
        sx={{ display: "block", color: "#65635F", mt: 3 }}
      >
        Taxes and shipping fees will apply upon checkout
      </Typography>
    </Box>
  );
}
