import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableHead,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

export const Favorites = ({ listOfFavorites }) => {
  console.log("list: ", listOfFavorites);
  const favoritesPageTable =
    listOfFavorites.length === 0 ? (
      <div style={{ justifyContent: "center" }}>
        <Alert severity="error">No favorite currencies yet!</Alert>
      </div>
    ) : (
      <TableContainer
        component={Paper}
        style={{ marginTop: 30, marginRight: "auto" }}
      >
        <Table
          style={{ minWidth: "650" }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead back style={{ backgroundColor: "royalblue" }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right" style={{ width: 100 }}>
                Last
              </TableCell>
              <TableCell align="right" style={{ width: 100 }}>
                Change
              </TableCell>
              <TableCell align="right" style={{ width: 100 }}>
                Change Percent
              </TableCell>
              <TableCell align="right" style={{ width: 100 }}>
                High
              </TableCell>
              <TableCell align="right" style={{ width: 100 }}>
                Low
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listOfFavorites &&
              listOfFavorites.map((currency) => {
                return (
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ color: "red" }}
                    >
                      <Link
                        to="/details"
                        style={{ textDecoration: "none", color: "primary" }}
                      >
                        {currency.NAME}
                      </Link>
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="right"
                      style={{ width: 100 }}
                    >
                      {currency.LAST_PRICE.toFixed(2)}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="right"
                      style={{ width: 100 }}
                    >
                      {currency.DAILY_CHANGE.toFixed(2)}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="right"
                      style={{ width: 100 }}
                    >
                      {currency.DAILY_CHANGE_RELATIVE.toFixed(2) * 100 + "%"}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="right"
                      style={{ width: 100 }}
                    >
                      {currency.HIGH.toFixed(2)}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="right"
                      style={{ width: 100 }}
                    >
                      {currency.LOW.toFixed(2)}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    );

  return (
    <div style={{ marginTop: 30, marginRight: "auto" }}>
      {favoritesPageTable}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    listOfFavorites: state.listOfFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);
