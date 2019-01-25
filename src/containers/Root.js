import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import DevTools from "./DevTools";
import { BrowserRouter as Router } from "react-router-dom";
import StyledContainer from "../components/StyledContainer";
import { ThemeProvider } from "styled-components";
import theme from "../constants/theme";
import App from "../components/App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StyledContainer>
          <ToastContainer />
          <Router>
            <App />
          </Router>
          <DevTools />
        </StyledContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default Root;
