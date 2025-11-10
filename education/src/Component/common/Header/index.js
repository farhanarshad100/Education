import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { toggleTheme } from "@/redux/themeSlice";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { navItems } from "./navData";
import Image from "next/image";
const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#fff", boxShadow: "none", py:2.5 }}
    >
      <Container
  maxWidth={false} // disables default MUI width limits
  sx={{
    maxWidth: "1400px",
  }}
>
        <Toolbar disableGutters
          sx={{ display: "flex", justifyContent: "space-between",  }}
        >
          <Typography variant="h6" sx={{ color: "#000" }}>
            Art Gallery
          </Typography>

          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                component={Link}
                to={item.path}
                sx={{
                  color: "#000",
                  textTransform: "none",
                  fontSize: "14px",
                  textTransform: "uppercase",
                  "&:hover": { color: "#0b08c8" },
                }}
              >
                {item.label}
              </Button>
            ))}
            <Box className="iconSection">
              <List
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  paddingLeft: "20px",
                }}
              >
                <ListItem disablePadding sx={{ width: "auto" }}>
                  <Image
                    src="/images/search.svg"
                    alt="Search"
                    width={22}
                    height={22}
                    priority
                  />
                </ListItem>
                <ListItem disablePadding sx={{ width: "auto" }}>
                  <Image
                    src="/images/cart.svg"
                    alt="Cart"
                    width={22}
                    height={22}
                    priority
                  />
                </ListItem>

                <ListItem disablePadding sx={{ width: "auto" }}>
                  <Image
                    src="/images/heart.svg"
                    alt="Wishlist"
                    width={22}
                    height={22}
                    priority
                  />
                </ListItem>

                <ListItem disablePadding sx={{ width: "auto" }}>
                  <Image
                    src="/images/user-circle.svg"
                    alt="User"
                    width={22}
                    height={22}
                    priority
                  />
                </ListItem>
              </List>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
