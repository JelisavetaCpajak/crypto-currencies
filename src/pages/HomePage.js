import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableHead,
} from "@material-ui/core";

import * as actionTypes from "../store/action";

export const HomePage = ({ setCurrencyDetails, data, setData }) => {
  var wBTCUSD = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

  wBTCUSD.onopen = function () {
    wBTCUSD.send(
      JSON.stringify({
        event: "subscribe",
        channel: "ticker",
        pair: "BTCUSD",
      })
    );
  };

  wBTCUSD.onmessage = function (msg) {
    var response = JSON.parse(msg.data);
    if (response[1] !== "hb" && response[1]) {
      const res = {
        NAME: "BTCUSD",
        BID: Math.round(response[1][0], 2),
        BID_SIZE: response[1][1],
        ASK: response[1][2],
        ASK_SIZE: response[1][3],
        DAILY_CHANGE: response[1][4],
        DAILY_CHANGE_RELATIVE: response[1][5].toFixed(2),
        LAST_PRICE: response[1][6],
        VOLUME: response[1][7],
        HIGH: response[1][8],
        LOW: response[1][9],
      };

      const newData = [...data];
      newData.map((curr, idx) => {
        if (curr.NAME === "BTCUSD") {
          newData[idx] = res;
        }
      });

      setData(newData);
    }
  };

  var wETHUSD = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

  wETHUSD.onopen = function () {
    wETHUSD.send(
      JSON.stringify({
        event: "subscribe",
        channel: "ticker",
        pair: "ETHUSD",
      })
    );
  };

  wETHUSD.onmessage = function (msg) {
    var response = JSON.parse(msg.data);
    if (response[1] !== "hb" && response[1]) {
      const res = {
        NAME: "ETHUSD",
        BID: Math.round(response[1][0], 2),
        BID_SIZE: response[1][1],
        ASK: response[1][2],
        ASK_SIZE: response[1][3],
        DAILY_CHANGE: response[1][4],
        DAILY_CHANGE_RELATIVE: response[1][5].toFixed(2),
        LAST_PRICE: response[1][6],
        VOLUME: response[1][7],
        HIGH: response[1][8],
        LOW: response[1][9],
      };

      const newData = [...data];
      newData.map((curr, idx) => {
        if (curr.NAME === "ETHUSD") {
          newData[idx] = res;
        }
      });

      setData(newData);
    }
  };

  var wLTCUSD = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

  wLTCUSD.onopen = function () {
    wLTCUSD.send(
      JSON.stringify({
        event: "subscribe",
        channel: "ticker",
        pair: "LTCUSD",
      })
    );
  };

  wLTCUSD.onmessage = function (msg) {
    var response = JSON.parse(msg.data);
    if (response[1] !== "hb" && response[1]) {
      const res = {
        NAME: "LTCUSD",
        BID: Math.round(response[1][0], 2),
        BID_SIZE: response[1][1],
        ASK: response[1][2],
        ASK_SIZE: response[1][3],
        DAILY_CHANGE: response[1][4],
        DAILY_CHANGE_RELATIVE: response[1][5].toFixed(2),
        LAST_PRICE: response[1][6],
        VOLUME: response[1][7],
        HIGH: response[1][8],
        LOW: response[1][9],
      };

      const newData = [...data];
      newData.map((curr, idx) => {
        if (curr.NAME === "LTCUSD") {
          newData[idx] = res;
        }
      });

      setData(newData);
    }
  };

  var wLTCBTC = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

  wLTCBTC.onopen = function () {
    wLTCBTC.send(
      JSON.stringify({
        event: "subscribe",
        channel: "ticker",
        pair: "LTCBTC",
      })
    );
  };

  wLTCBTC.onmessage = function (msg) {
    var response = JSON.parse(msg.data);
    if (response[1] !== "hb" && response[1]) {
      const res = {
        NAME: "LTCBTC",
        BID: Math.round(response[1][0], 2),
        BID_SIZE: response[1][1],
        ASK: response[1][2],
        ASK_SIZE: response[1][3],
        DAILY_CHANGE: response[1][4],
        DAILY_CHANGE_RELATIVE: response[1][5].toFixed(2),
        LAST_PRICE: response[1][6],
        VOLUME: response[1][7],
        HIGH: response[1][8],
        LOW: response[1][9],
      };

      const newData = [...data];
      newData.map((curr, idx) => {
        if (curr.NAME === "LTCBTC") {
          newData[idx] = res;
        }
      });

      setData(newData);
    }
  };

  var wETHBTC = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

  wETHBTC.onopen = function () {
    wETHBTC.send(
      JSON.stringify({
        event: "subscribe",
        channel: "ticker",
        pair: "ETHBTC",
      })
    );
  };

  wETHBTC.onmessage = function (msg) {
    var response = JSON.parse(msg.data);
    if (response[1] !== "hb" && response[1]) {
      const res = {
        NAME: "ETHBTC",
        BID: Math.round(response[1][0], 2),
        BID_SIZE: response[1][1],
        ASK: response[1][2],
        ASK_SIZE: response[1][3],
        DAILY_CHANGE: response[1][4],
        DAILY_CHANGE_RELATIVE: response[1][5].toFixed(2),
        LAST_PRICE: response[1][6],
        VOLUME: response[1][7],
        HIGH: response[1][8],
        LOW: response[1][9],
      };

      const newData = [...data];
      newData.map((curr, idx) => {
        if (curr.NAME === "ETHBTC") {
          newData[idx] = res;
        }
      });

      setData(newData);
    }
  };

  const homePageTable = (
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
          {data.map((currency) => {
            return (
              <TableRow>
                <TableCell component="th" scope="row">
                  <Link
                    to="/details"
                    style={{ textDecoration: "none", color: "primary" }}
                    onClick={() => setCurrencyDetails(currency)}
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
                  {currency.DAILY_CHANGE_RELATIVE}
                  {"%"}
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

  return <div>{homePageTable}</div>;
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrencyDetails: (currency) =>
      dispatch({
        type: actionTypes.SET_CURRENCY_DETAILS,
        currencyDetails: currency,
      }),
    setData: (data) =>
      dispatch({
        type: actionTypes.SET_DATA,
        data: data,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
