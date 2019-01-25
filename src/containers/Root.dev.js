import React from "react";
import { Provider } from "react-redux";
import DevTools from "./DevTools";
import { BrowserRouter as Router } from "react-router-dom";
import StyledContainer from "../components/StyledContainer";
import { ThemeProvider } from "styled-components";
import theme from "../constants/theme";
import App from "../components/App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import store, { persiststore } from "../store";

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persiststore} loading={null}>
        <ThemeProvider theme={theme}>
          <StyledContainer>
            <ToastContainer />
            <Router>
              <App />
            </Router>
            <DevTools />
          </StyledContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default Root;
