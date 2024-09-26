import React, { Fragment } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const TechStackTable = (props) => {
  const techStack = props.stack;
  console.log(techStack);
  const title = props.stack.title;

  const TableCells = techStack.skills.map((skill, index) => (
    <TableRow
      key={index}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="center">{skill}</TableCell>
    </TableRow>
  ));

  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ maxHeight: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ background: "#f0d3f7" }} align="center">
                {title}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{TableCells}</TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default TechStackTable;
