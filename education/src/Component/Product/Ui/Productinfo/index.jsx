import React from "react";
import Productgallery from "../Productgallery";
import Productdetails from "../Productdetails";
import { Box, Container, Grid } from "@mui/material";
const Productinfo = () => {
  return (
    <>
      <section style={{ padding: "70px 0" }}>
        <Container
          maxWidth={false}
          sx={{
            maxWidth: "1400px",
          }}
        >
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 2, sm: 2, md: 20 }}
          >
            <Grid size={6}>
              <Productgallery />
            </Grid>
            <Grid size={6}>
              <Productdetails />
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Productinfo;
