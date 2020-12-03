import React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { IconContext } from "react-icons";
import { WiDayCloudy } from "react-icons/wi";
import Link from "@material-ui/core/Link";
import { Link as LinkRouter } from "react-router-dom";
import { Typography } from "@material-ui/core";

const AppFrame = ({ children }) => {
  return (
    <Grid container justify="center">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton color="inherit" aria-label="menu">
            <Link
              to="/main"
              color="inherit"
              aria-label="menu"
              component={LinkRouter}
            >
              <IconContext.Provider value={{ size: "2em" }}>
                <WiDayCloudy></WiDayCloudy>
              </IconContext.Provider>
            </Link>
          </IconButton>
          <Typography variant="h6" color="inherit">
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid item xs={12} sm={11} md={10} lg={8}>
        {children}
      </Grid>
    </Grid>
  );
};

export default AppFrame;
