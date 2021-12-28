import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { ToastContainer } from "react-toastify";

import { Header } from "./components/Header";
import { Routes } from "./routes";
import { history } from "./services/history";

import { persistor, store } from "./store";

import GlobalStyle, { Container } from "./styles/global";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <Header />
          <Container>
            <Routes />
          </Container>
          <ToastContainer autoClose={3000} theme="colored" />
          <GlobalStyle />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
