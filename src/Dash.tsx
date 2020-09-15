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
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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
    background: "transparent",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  table: {
    background: "#1D1E22",
    minWidth: 650,
  },
  tableContainer: {
    boxShadow: "none",
    background: 'transparent',
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
    fontSize: 14,
    color: "#FFFFFF",
    borderBottom: "none",
    verticalAlign: "center",
    horizontalAlign: "center",
  },
  tableCell2: {
    width: 30,
    fontSize: 14,
    background: "#3B3B3B",
    borderBottom: "none",
  },
  centeredBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    background: "#8C8D8D",
    width: 40,
    height: 40,
    borderRadius: "50%",
    fontSize: 12,
  },
  centeredBoxLow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    background: '#f88',
    width: 40,
    height: 40,
    borderRadius: "50%",
    fontSize: 12,
  },
  centeredBoxMid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    background: "#D7B059",
    width: 40,
    height: 40,
    borderRadius: "50%",
    fontSize: 12,
  },
  centeredBoxHigh: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    background: "#8C8D8D",
    width: 40,
    height: 40,
    borderRadius: "50%",
    fontSize: 12,
  },
  canContainer: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",

    height: 40,
    color: "#ffffff",
    borderColor: "#3E3E3E",
    borderRadius: 25,
    textTransform: "none",
    padding: 0,
    paddingLeft: 10,
  },
  canBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    background: "#8C8D8D",
    width: 40,
    height: 40,
    borderRadius: "50%",
    fontSize: 12,
    marginLeft: 7,
    border: '4px solid',
    borderColor: "#ffffff",
  },
  circleProg: {
    width: 40,
    height: 40,
    marginRight: 10,

  },
  canContainerRight: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",

    height: 40,
    color: "#ffffff",
    borderColor: "#3E3E3E",
    borderRadius: 25,
    textTransform: "none",
    padding: 0,
    paddingRight: 10,
  },
  naCell: {
    fontSize: 14,
    color: "#8C8D8D",
    borderBottom: "none",
    verticalAlign: "center",
    horizontalAlign: "center",
  },
}));

function createData(
  name: string,
  skill: string,
  canProficiency: number,
  compare: string,
  bizProficiency: number
) {
  return { name, skill, canProficiency, compare, bizProficiency };
}

const applications = [createData("", "Machine Learning", 1, "25%", 4)];

const careers = [createData("", "Machine Learning", 1, "25%", 4)];

const deliveries = [
  createData("", "AWS", 1, "25%", 4),
  createData("", "MySQL", 1, "25%", 4),
  createData("", "MongoDB", 1, "25%", 4),
  createData("", "TensorFlow", 1, "25%", 4),
  createData("", "Machine Learning", 1, "25%", 4),
];

export default function Dash() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container disableGutters>
        <Typography className={classes.first}>Techical Skills</Typography>
        <Container disableGutters className={classes.spaced}>
          <TableContainer className={classes.tableContainer} component={Paper}>
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
                      <Button
                        variant="outlined"
                        className={classes.canContainer}
                      >
                        <Grid
                          container
                          direction="row"
                          justify="space-between"
                          alignItems="center"
                        >
                          {row.skill}
                          <Box className={classes.canBox}>
                            {row.canProficiency}
                          </Box>
                        </Grid>
                      </Button>
                    </TableCell>
                    <TableCell className={classes.tableCell2} align="center">
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Box className={classes.centeredBoxLow}>{row.compare}</Box>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      <Button
                        variant="outlined"
                        className={classes.canContainerRight}
                      >
                        <Grid
                          container
                          direction="row"
                          justify="space-between"
                          alignItems="center"
                        >
                          <CircularProgressbar className={classes.circleProg} styles={buildStyles({
                            textSize: '30px',
                            pathColor: '#9EE1F3',
                            textColor: '#9EE1F3',
                            trailColor: '#3e98c7',
                            backgroundColor: '#3e98c7',
                          })} value={13} maxValue={16} text={row.bizProficiency.toString()} />
                          {row.skill}
                        </Grid>
                      </Button>
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
                  <TableRow key={row.name}>
                    <TableCell
                      className={classes.tableCell}
                      component="th"
                      scope="row"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="right">
                      <span className={classes.naCell} > No Skills Matched </span>
                    </TableCell>
                    <TableCell className={classes.tableCell2} align="center">
                      <span className={classes.naCell} > N/A</span>
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      <span className={classes.naCell} > No Skills Matched </span>
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
                  <TableRow key={row.name}>
                    <TableCell
                      className={classes.tableCell}
                      component="th"
                      scope="row"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="right">
                      <Button
                        variant="outlined"
                        className={classes.canContainer}
                      >
                        <Grid
                          container
                          direction="row"
                          justify="space-between"
                          alignItems="center"
                        >
                          {row.skill}
                          <Box className={classes.canBox}>
                            {row.canProficiency}
                          </Box>
                        </Grid>
                      </Button>
                    </TableCell>
                    <TableCell className={classes.tableCell2} align="center">
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Box className={classes.centeredBoxMid}>{row.compare}</Box>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      <Button
                        variant="outlined"
                        className={classes.canContainerRight}
                      >
                        <Grid
                          container
                          direction="row"
                          justify="space-between"
                          alignItems="center"
                        >
                          <CircularProgressbar className={classes.circleProg} styles={buildStyles({
                            textSize: '30px',
                            pathColor: '#9EE1F3',
                            textColor: '#9EE1F3',
                            trailColor: '#3e98c7',
                            backgroundColor: '#3e98c7',
                          })} value={13} maxValue={16} text={row.bizProficiency.toString()} />
                          {row.skill}
                        </Grid>
                      </Button>
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
