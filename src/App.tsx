import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import AppRoutes from "@/routes/routes";

function App() {
  return (
    <BrowserRouter>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
        <AppRoutes />
      </CookiesProvider>
    </BrowserRouter>
  );
}

export default App;
