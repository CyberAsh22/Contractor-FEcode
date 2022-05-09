import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
const ViewTripModalInner = ({ array, activeStep }) => {
  const active = Array.from(Array(activeStep).keys());
  return (
    <div>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="th-styling">
              <TableCell style={{ width: "20%" }} align="left">
                Trip status
              </TableCell>
              <TableCell style={{ width: "10%" }} align="left">
                {" "}
              </TableCell>
              <TableCell style={{ width: "25%" }} align="left">
                Sub-status
              </TableCell>
              <TableCell style={{ width: "20%" }} align="left">
                Current stauts
              </TableCell>
              <TableCell style={{ width: "35%" }} align="center">
                Completion time
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="stepper_data_styling">
            {array.map((label, i) => {
              const found = active.some((element) => element == i);
              return (
                <TableRow
                  key={label.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    className="td-fonts-stepper"
                    component="td"
                    scope="row"
                  >
                    {label.id.replaceAll("_", " ")}
                  </TableCell>

                  <TableCell
                    className={found ? "active " : "inactive"}
                    component="td"
                    scope="row"
                  >
                    <div
                      className={i == 2 ? "circle1 blue-dot" : "circle1"}
                    ></div>
                    <div className="line"></div>
                  </TableCell>

                  <TableCell className="td-fonts-stepper " align="left">
                    {label.label}
                  </TableCell>
                  <TableCell
                    className="td-fonts-stepper time_situation"
                    align="left"
                  >
                    <span>Completed</span>
                    <span
                      className={"situation_styling two"}
                      // className={
                      //   i == 1
                      //     ? "situation_styling red "
                      //     : "situation_styling two"
                      // }
                    >
                      On Time
                      {/* {label.timeSituation} */}
                    </span>
                  </TableCell>
                  <TableCell
                    className="td-fonts-stepper time-flex"
                    align="left"
                  >
                    <div className="main-separate">
                      <div className="main-separate_inner mr-2 fifty">
                        <span>10:30 AM</span>
                        {/* <span>{label.fourth}</span> */}
                        <span className="font-small">
                          (Estimated)
                          {/* {label.timeEstimated} */}
                        </span>
                      </div>
                      <div className="main-separate_inner fifty">
                        <span className={"testtt"}>10:25 AM</span>

                        {/* <span className={i == 1 ? "red" : "testtt"}>
                          {label.fifth ? label.fifth : "-"}{" "}
                        </span> */}
                        <span className="font-small">
                          (Actual)
                          {/* {label.timeActual} */}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ViewTripModalInner;
