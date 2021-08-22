import * as actionTypes from "./action";

const initialState = {
  currencyDetails: {},
  loggedIn: false,
  listOfFavorites: [],
  data: [
    {
      NAME: "BTCUSD",
      BID: 49600,
      BID_SIZE: 10.72902267,
      ASK: 49601,
      ASK_SIZE: 7.10798581,
      DAILY_CHANGE: 852.0848629,
      DAILY_CHANGE_RELATIVE: (0.0175).toFixed(2) * 100,
      LAST_PRICE: 49600.60126578,
      VOLUME: 4371.91069341,
      HIGH: 49698,
      LOW: 48219,
    },
    {
      NAME: "ETHUSD",
      BID: 49641,
      BID_SIZE: 2.22216009,
      ASK: 49642,
      ASK_SIZE: 14.402963180000002,
      DAILY_CHANGE: 901.48359712,
      DAILY_CHANGE_RELATIVE: (0.0185).toFixed(2) * 100,
      LAST_PRICE: 49650,
      VOLUME: 4395.3008469,
      HIGH: 49711,
      LOW: 48219,
    },
    {
      NAME: "LTCUSD",
      BID: 181.84,
      BID_SIZE: 1112.2543706799997,
      ASK: 181.88,
      ASK_SIZE: 1293.53719292,
      DAILY_CHANGE: -0.06,
      DAILY_CHANGE_RELATIVE: -(0.0003).toFixed(2) * 100,
      LAST_PRICE: 181.93,
      VOLUME: 20280.64561062,
      HIGH: 184.6,
      LOW: 178,
    },
    {
      NAME: "LTCBTC",
      BID: 0.0036607,
      BID_SIZE: 518.01889114,
      ASK: 0.0036635,
      ASK_SIZE: 2690.79535172,
      DAILY_CHANGE: -0.0000666,
      DAILY_CHANGE_RELATIVE: -(0.0178).toFixed(2) * 100,
      LAST_PRICE: 0.003667,
      VOLUME: 3755.8124085100003,
      HIGH: 0.0037482,
      LOW: 0.0036617,
    },
    {
      NAME: "ETHBTC",
      BID: 0.066029,
      BID_SIZE: 88.93648208999998,
      ASK: 0.066047,
      ASK_SIZE: 125.24264602,
      DAILY_CHANGE: -0.000796,
      DAILY_CHANGE_RELATIVE: -(0.0119).toFixed(2) * 100,
      LAST_PRICE: 0.066038,
      VOLUME: 15641.6386508,
      HIGH: 0.067542,
      LOW: 0.066,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENCY_DETAILS:
      return {
        ...state,
        currencyDetails: action.currencyDetails,
      };

    case actionTypes.SET_IS_LOGGED_IN:
      return {
        ...state,
        loggedIn: action.loggedIn,
      };

    case actionTypes.SET_DATA:
      return {
        ...state,
        data: action.data,
      };

    case actionTypes.ADD_TO_FAVORITES: {
      const updatedList = [
        ...state.listOfFavorites,
        action.currencyToFavorites,
      ];
      return {
        ...state,
        listOfFavorites: updatedList,
      };
    }

    case actionTypes.REMOVE_FROM_FAVORITES: {
      let newList = [];
      state.listOfFavorites.forEach((curr) => {
        if (curr.NAME !== action.currencyRemovedFavorites.NAME) {
          newList.push(curr);
        }
      });

      return {
        ...state,
        listOfFavorites: newList,
      };
    }

    default:
      return state;
  }
};

export default reducer;
