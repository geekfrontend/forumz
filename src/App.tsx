import { AuthProvider } from "./providers/auth-provider";
import router from "./router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <AuthProvider isLoggedIn={true}>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
