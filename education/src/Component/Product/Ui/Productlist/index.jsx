import { Box, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ArtworkCard from "../Card";
import Image from "next/image";
const Productlist = () => {
  return (
    <>
      <section style={{ padding: "0px 0 70px 0" }}>
        <Container
          maxWidth={false}
          sx={{
            maxWidth: "1400px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: "45px",
            }}
          >
            <Typography variant="h3" sx={{ fontSize: "32px" }}>
              Artworks by Nijesh Mohan
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body1">
                See all artworks from Nijesh Mohan
              </Typography>
              <Image
                src="/images/seeall.svg"
                alt="My Website Logo"
                width={16}
                height={16}
                priority
              />
            </Box>
          </Box>

          <Grid
            container
            rowSpacing={0}
            columnSpacing={{ xs: 2, sm: 2, md: 3 }}
          >
            <Grid size={3}>
              <ArtworkCard />
            </Grid>
            <Grid size={3}>
              <ArtworkCard />
            </Grid>
            <Grid size={3}>
              <ArtworkCard />
            </Grid>
            <Grid size={3}>
              <ArtworkCard />
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Productlist;
