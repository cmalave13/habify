import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { Container } from "semantic-ui-react";

// table stuff

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

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

  return (
    <React.Fragment>
      <Container fixed>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Habit</TableCell>
              <TableCell>06.13.21</TableCell>
              <TableCell>06.14.21</TableCell>
              <TableCell>06.15.21</TableCell>
              <TableCell>06.16.21</TableCell>
              <TableCell>06.17.21</TableCell>
              <TableCell>06.18.21</TableCell>
              <TableCell>06.19.21</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Wake Up @ 630</TableCell>
              <TableCell>
                <Checkbox name="day1" label="Wake Up @ 630" />
              </TableCell>
              <TableCell>
                <Checkbox name="day2" label="Wake Up @ 630" />
              </TableCell>
              <TableCell>
                <Checkbox name="day3" label="Wake Up @ 630" />
              </TableCell>
              <TableCell>
                <Checkbox name="day4" label="Wake Up @ 630" />
              </TableCell>
              <TableCell>
                <Checkbox name="day5" label="Wake Up @ 630" />
              </TableCell>
              <TableCell>
                <Checkbox name="day6" label="Wake Up @ 630" />
              </TableCell>
              <TableCell>
                <Checkbox name="day7" label="Wake Up @ 630" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Meditate</TableCell>
              <TableCell>
                <Checkbox name="day1" label="Meditate" />
              </TableCell>
              <TableCell>
                <Checkbox name="day2" label="Meditate" />
              </TableCell>
              <TableCell>
                <Checkbox name="day3" label="Meditate" />
              </TableCell>
              <TableCell>
                <Checkbox name="day4" label="Meditate" />
              </TableCell>
              <TableCell>
                <Checkbox name="day5" label="Meditate" />
              </TableCell>
              <TableCell>
                <Checkbox name="day6" label="Meditate" />
              </TableCell>
              <TableCell>
                <Checkbox name="day7" label="Meditate" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Exercise</TableCell>
              <TableCell>
                <Checkbox name="day1" label="Exercise" />
              </TableCell>
              <TableCell>
                <Checkbox name="day2" label="Exercise" />
              </TableCell>
              <TableCell>
                <Checkbox name="day3" label="Exercise" />
              </TableCell>
              <TableCell>
                <Checkbox name="day4" label="Exercise" />
              </TableCell>
              <TableCell>
                <Checkbox name="day5" label="Exercise" />
              </TableCell>
              <TableCell>
                <Checkbox name="day6" label="Exercise" />
              </TableCell>
              <TableCell>
                <Checkbox name="day7" label="Exercise" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Read</TableCell>
              <TableCell>
                <Checkbox name="day1" label="Read" />
              </TableCell>
              <TableCell>
                <Checkbox name="day2" label="Read" />
              </TableCell>
              <TableCell>
                <Checkbox name="day3" label="Read" />
              </TableCell>
              <TableCell>
                <Checkbox name="day4" label="Read" />
              </TableCell>
              <TableCell>
                <Checkbox name="day5" label="Read" />
              </TableCell>
              <TableCell>
                <Checkbox name="day6" label="Read" />
              </TableCell>
              <TableCell>
                <Checkbox name="day7" label="Read" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Container>
    </React.Fragment>
  );
};

export default June;
