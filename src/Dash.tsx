import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  first: {
    color: "#8C8D8D",
    fontSize: 24,
  },
  bg: {
    color: "#8C8D8D",
  },
  spaced: {
    backgroundColor: "transparent",
    paddingRight: 40,
  },
  paper: {
    background: "#1D1E22",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  table: {
    background: "#1D1E22",
    minWidth: 650,
  },
  tableHead1: {
    color: "#FFFFFF",
    borderBottom: "none",
    fontSize: 16,
  },
  tableHead2: {
    width: 70,
    color: "#8C8D8D",
    background: "#3B3B3B",
    borderBottom: "none",
  },
  tableHead3: {
    fontSize: 16,
    color: "#8C8D8D",
    borderBottom: "none",
  },
  tableCell: {
    fontSize: 16,
    borderBottom: "none",
  },
  tableCell2: {
    width: 30,
    fontSize: 16,
    background: "#3B3B3B",
    borderBottom: "none",
  },
}));

function createData(
  name: string,
  candidate: number,
  vs: number,
  business: number,
) {
  return { name, candidate, vs, business};
}
function createData2(
  nametwo: string,
  candidate: number,
  vs: number,
  business: number,
 
) {
  return { nametwo, candidate, vs, business};
}
function createData3(
  namethree: string,
  candidate: number,
  vs: number,
  business: number,
  
) {
  return { namethree, candidate, vs, business};
}

const applications = [createData("", 159, 6.0, 24)];

const careers = [createData2("", 159, 6.0, 24)];

const deliveries = [
  createData3("", 159, 6.0, 24),
  createData3("", 159, 6.0, 24),
  createData3("", 159, 6.0, 24),
  createData3("", 159, 6.0, 24),
  createData3("", 159, 6.0, 24),
];

export default function Dash() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container disableGutters>
        <Typography className={classes.first}>Techical Skills</Typography>
        <Container disableGutters className={classes.spaced}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              {/* //Applications==================================================================== */}

              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHead1}>
                    Applications
                  </TableCell>

                  <TableCell className={classes.tableHead3} align="right">
                    CANDIDATE
                  </TableCell>
                  <TableCell className={classes.tableHead2} align="center">
                    VS
                  </TableCell>
                  <TableCell className={classes.tableHead3} align="left">
                    BUSINESS
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {applications.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell
                      className={classes.tableCell}
                      component="th"
                      scope="row"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="right">
                      {row.candidate}
                    </TableCell>
                    <TableCell className={classes.tableCell2} align="center">
                      {row.vs}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      {row.business}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>

              {/* //Career==================================================================== */}

              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHead1}>Career</TableCell>

                  <TableCell className={classes.tableHead3} align="right">
                    CANDIDATE
                  </TableCell>
                  <TableCell className={classes.tableHead2} align="center">
                    VS
                  </TableCell>
                  <TableCell className={classes.tableHead3} align="left">
                    BUSINESS
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {careers.map((row) => (
                  <TableRow key={row.nametwo}>
                    <TableCell
                      className={classes.tableCell}
                      component="th"
                      scope="row"
                    >
                      {row.nametwo}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="right">
                      {row.candidate}
                    </TableCell>
                    <TableCell className={classes.tableCell2} align="center">
                      {row.vs}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      {row.business}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>

              {/* //Delivery==================================================================== */}

              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHead1}>Delivery</TableCell>

                  <TableCell className={classes.tableHead3} align="right">
                    CANDIDATE
                  </TableCell>
                  <TableCell className={classes.tableHead2} align="center">
                    VS
                  </TableCell>
                  <TableCell className={classes.tableHead3} align="left">
                    BUSINESS
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {deliveries.map((row) => (
                  <TableRow key={row.namethree}>
                    <TableCell
                      className={classes.tableCell}
                      component="th"
                      scope="row"
                    >
                      {row.namethree}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="right">
                      {row.candidate}
                    </TableCell>
                    <TableCell className={classes.tableCell2} align="center">
                      {row.vs}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      {row.business}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Container>
    </div>
  );
}
