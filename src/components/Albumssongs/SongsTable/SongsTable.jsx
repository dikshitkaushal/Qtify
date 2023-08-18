import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";
// import { makeStyles } from "@material-ui/styles";

// const useStyles = makeStyles(() => ({
//   ul: {
//     "& .MuiPaginationItem-root": {
//       color: "#ffffff",
//     },
//   },
// }));

const SongsTable = ({ data }) => {
  let [recordsPerPage, setRecordsPerPage] = useState(10);
  let [currentPage, setCurrentPage] = useState(1);
  let [tableData, setTableData] = useState([]);
  let [pages, setPages] = useState(0);
  // const classes = useStyles();

  function handleChange(e) {
    let pageNumber = Number(e.target.textContent);
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    let start = currentPage * recordsPerPage - recordsPerPage;
    let end = currentPage * recordsPerPage;
    let slicedData = data.slice(start, end);
    let totalpage = Math.ceil(data.length / recordsPerPage);
    setTableData(slicedData);
    setPages(totalpage);
  }, [currentPage]);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Pagination
          // classes={{ ul: classes.ul }}
          onChange={(e) => {
            handleChange(e);
          }}
          count={pages}
          color="secondary"
        />
      </div>

      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, backgroundColor: "#121212" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Title</TableCell>
              <TableCell sx={{ color: "white" }}>Artist</TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                Duration
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((item) => (
              <TableRow
                key={item.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "10px",
                      color: "white",
                    }}
                  >
                    <img
                      style={{ width: "40px", borderRadius: "4px" }}
                      src={item.image}
                      alt="tableimage"
                    />
                    <span>{item.title}</span>
                  </div>
                </TableCell>
                <TableCell sx={{ color: "white" }}>
                  {item.artists.join(",")}
                </TableCell>
                <TableCell sx={{ color: "white" }} align="right">
                  {Math.ceil(item.durationInMs / (1000 * 60))}:
                  {Math.ceil((item.durationInMs / 1000) % 60)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SongsTable;
