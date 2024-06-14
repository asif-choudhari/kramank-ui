import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import AppRoutes from "@/routes/app-routes";
import store from "./store";

function App() {
  return (
    <BrowserRouter>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
      </CookiesProvider>
    </BrowserRouter>
  );
}

export default App;
