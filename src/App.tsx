import { useState } from "react";

import { AuthProvider } from "./providers/auth-provider";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Drawer } from "./components/ui/drawer";
import DrawerContent from "./components/common/customs/Drawer"; // Menggunakan alias yang berbeda
import TextEditor from "./components/common/customs/TextEditor";
import { Button } from "./components/ui/button";

function App() {
  const [value, setValue] = useState<string>("");
  return (
    <>
      <Toaster />

      <Drawer>
        <DrawerContent
          children={
            <div className="p-2">
              <TextEditor onChange={(e) => setValue(e)} value={value} />
              <Button className="w-full mt-4">Submit</Button>
            </div>
          }
        />
        <AuthProvider isLoggedIn={true}>
          <RouterProvider router={router} />
        </AuthProvider>
      </Drawer>
    </>
  );
}

export default App;
