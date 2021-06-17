import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { Container } from "semantic-ui-react";

// table stuff

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import startOfWeek from "date-fns/startOfWeek";
import endOfWeek from "date-fns/endOfWeek";
import eachDayOfInterval from "date-fns/eachDayOfInterval";

import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { useState } from "react";

import { yellow } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { motion } from "framer-motion";

// import "react-date-range/dist/styles.css"; // main css file
// import "react-date-range/dist/theme/default.css"; // theme css file

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const YellowCheckbox = withStyles({
  root: {
    color: yellow[400],
    "&$checked": {
      color: yellow[600],
      display: "flex",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const June = () => {
  // const [state, setState] = React.useState({
  //   checkedA: false,
  //   checkedB: false,
  //   checkedC: false,
  //   checkedD: false,
  // }); // state not implemented yet, still creating front end structure with static data

  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // }; // handle change event not used yet - check materia ui docs for demo

  // const classes = useStyles();

  // const [state, setState] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: addDays(new Date(), 7),
  //     key: "selection",
  //   },
  // ]);

  const now = new Date(); //getting each day of current week
  const daysOfWeek = eachDayOfInterval({
    start: startOfWeek(now),
    end: endOfWeek(now),
  });

  let habit1Cells = [];
  for (let i = 0; i <= 6; i++) {
    habit1Cells.push(
      <TableCell>
        <FormControlLabel control={<YellowCheckbox name="checkedG" />} />
      </TableCell>
    );
  }

  let habit2Cells = [];
  for (let i = 0; i <= 6; i++) {
    habit2Cells.push(
      <TableCell>
        <FormControlLabel control={<YellowCheckbox name="checkedG" />} />
      </TableCell>
    );
  }

  let habit3Cells = [];
  for (let i = 0; i <= 6; i++) {
    habit3Cells.push(
      <TableCell>
        <FormControlLabel control={<YellowCheckbox name="checkedG" />} />
      </TableCell>
    );
  }

  let habit4Cells = [];
  for (let i = 0; i <= 6; i++) {
    habit4Cells.push(
      <TableCell>
        <FormControlLabel control={<YellowCheckbox name="checkedG" />} />
      </TableCell>
    );
  }

  return (
    <motion.div exit={{ opacity: 0 }}>
      <React.Fragment>
        <Container maxWidth="sm">
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>HABIT</TableCell>
                <TableCell>
                  {daysOfWeek[0].toDateString().replace("2021", "")}
                </TableCell>
                <TableCell>
                  {daysOfWeek[1].toDateString().replace("2021", "")}
                </TableCell>
                <TableCell>
                  {daysOfWeek[2].toDateString().replace("2021", "")}
                </TableCell>
                <TableCell>
                  {daysOfWeek[3].toDateString().replace("2021", "")}
                </TableCell>
                <TableCell>
                  {daysOfWeek[4].toDateString().replace("2021", "")}
                </TableCell>
                <TableCell>
                  {daysOfWeek[5].toDateString().replace("2021", "")}
                </TableCell>
                <TableCell>
                  {daysOfWeek[6].toDateString().replace("2021", "")}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Wake Up @ 630</TableCell>
                {habit1Cells}
              </TableRow>
              <TableRow>
                <TableCell>Meditate</TableCell>
                {habit2Cells}
              </TableRow>
              <TableRow>
                <TableCell>Exercise</TableCell>
                {habit3Cells}
              </TableRow>
              <TableRow>
                <TableCell>Read</TableCell>
                {habit4Cells}
              </TableRow>
            </TableBody>
          </Table>
        </Container>
        {/* <Container>
        <DateRangePicker
          onChange={(item) => setState([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={state}
          direction="horizontal"
        />
        ;
      </Container> */}
      </React.Fragment>
    </motion.div>
  );
};

export default June;
