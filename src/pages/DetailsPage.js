import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableHead,
  Button,
} from "@material-ui/core";
import * as actionTypes from "../store/action";

export const DetailsPage = ({
  currencyDetails,
  loggedIn,
  addToFavorites,
  removeFromFavorites,
  listOfFavorites,
}) => {
  const [addedToFavorites, setAddedToFavorites] = useState(false);
  const detailsPageTable = (
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
            <TableCell>Symbol</TableCell>
            <TableCell align="right" style={{ width: 100 }}>
              Last price
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
          <TableRow>
            <TableCell component="th" scope="row" style={{ width: 100 }}>
              {currencyDetails.NAME}
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              align="right"
              style={{ width: 100 }}
            >
              {currencyDetails.LAST_PRICE.toFixed(2)}
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              align="right"
              style={{ width: 100 }}
            >
              {currencyDetails.HIGH.toFixed(2)}
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              align="right"
              style={{ width: 100 }}
            >
              {currencyDetails.LOW.toFixed(2)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );

  useEffect(() => {
    listOfFavorites.forEach((element) => {
      if (element.NAME === currencyDetails.NAME) {
        setAddedToFavorites(true);
      }
    });
  }, [listOfFavorites]);

  return (
    <div>
      {detailsPageTable}
      <div style={{ marginTop: "5px" }}>
        {loggedIn ? (
          !addedToFavorites ? (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setAddedToFavorites(true);
                addToFavorites(currencyDetails);
              }}
            >
              Add to Favorites
            </Button>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                setAddedToFavorites(false);
                removeFromFavorites(currencyDetails);
              }}
            >
              Remove from Favorites
            </Button>
          )
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currencyDetails: state.currencyDetails,
    loggedIn: state.loggedIn,
    listOfFavorites: state.listOfFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToFavorites: (currency) =>
      dispatch({
        type: actionTypes.ADD_TO_FAVORITES,
        currencyToFavorites: currency,
      }),
    removeFromFavorites: (currency) =>
      dispatch({
        type: actionTypes.REMOVE_FROM_FAVORITES,
        currencyRemovedFavorites: currency,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
