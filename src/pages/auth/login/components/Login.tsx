import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const description =
  "A login form with email and password inside a card. There's an option to log in with GitHub and a link to register if you don't have an account";

const Login = () => {
  return (
    <div className="flex flex-col justify-center h-screen">
      <Card className="w-full max-w-sm mx-auto border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-xl">Login</CardTitle>
          <CardDescription>
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="geekfrontend@gmail.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="******" />
            </div>
            <Button type="submit" className="w-full">
              Log in
            </Button>
          </div>
          <div className="mt-4 text-sm text-center">
            Don't have an account?{" "}
            <Link to={"/register"} className="underline">
              Register
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
