import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import "./Header.css";
import * as actionTypes from "../../store/action";

export const Header = ({ setIsLoggedIn, loggedIn }) => {
  // const [loggedIn, setLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   setLoggedIn(!loggedIn);
  // };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <Button>Home</Button>
          </Link>
          {loggedIn && (
            <Link to="/favorites" className="navbar-logo">
              <Button>Favorites</Button>
            </Link>
          )}
          {!loggedIn && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsLoggedIn(true)}
              style={{ marginRight: "10px", marginLeft: "800px" }}
            >
              Log In
            </Button>
          )}
        </div>
      </nav>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsLoggedIn: (loggedIn) =>
      dispatch({
        type: actionTypes.SET_IS_LOGGED_IN,
        loggedIn: loggedIn,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
