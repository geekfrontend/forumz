import { AuthProvider } from "./providers/auth-provider";
import router from "./router";
import { RouterProvider } from "react-router-dom";

import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Toaster />
      <AuthProvider isLoggedIn={true}>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
