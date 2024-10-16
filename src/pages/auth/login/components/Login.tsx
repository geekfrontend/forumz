import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login, fetchUserProfile } from "@/store/auth/authSlice";
import { RootState, AppDispatch } from "@/store";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/useToast";
import { ThemeToggle } from "@/components/common/ThemeToggle";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading } = useSelector((state: RootState) => state.auth);
  const { toast } = useToast();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: LoginFormValues) => {
    console.log(data);
    const resultAction = await dispatch(login(data));

    if (login.fulfilled.match(resultAction)) {
      dispatch(fetchUserProfile());
      toast({
        variant: "success",
        description: "Login successful",
        position: "topCenter",
      });
      navigate("/");
    } else if (login.rejected.match(resultAction)) {
      toast({
        variant: "destructive",
        description: "Login failed",
        position: "topCenter",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-screen p-4">
      <Card className="w-full max-w-sm mx-auto border-none shadow-none">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                Log in
              </Button>
            </form>
          </Form>
          <div className="mt-4 text-sm text-center">
            Don't have an account?{" "}
            <Link to="/register" className="underline">
              Register
            </Link>
          </div>
          <div className="flex justify-center mt-4 ">
            <ThemeToggle />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
