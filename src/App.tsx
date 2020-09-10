import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import TopBar from "./TopBar";
import Content from "./Content";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Made with ❤️ by "}
      <Link color="inherit" href="https://teamcrushing.it/">
        Team Crushing it
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  return (
    <Container disableGutters maxWidth={false}>
      <TopBar />
      <Content />
      <Copyright />
    </Container>
  );
}
