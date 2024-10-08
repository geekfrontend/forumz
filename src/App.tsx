import { AuthProvider } from "./providers/auth-provider";
import { ThemeProvider } from "./providers/theme-provider";
import router from "./router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <AuthProvider isLoggedIn={false}>
        <RouterProvider router={router} />
        <ThemeProvider>
          <h1>threadz</h1>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
