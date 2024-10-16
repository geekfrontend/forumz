import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import router from "@/router";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Drawer } from "@/components/ui/drawer";
import DrawerContent from "@/components/common/customs/Drawer";
import TextEditor from "@/components/common/customs/TextEditor";
import { Input } from "@/components/ui/input";
import { Provider } from "react-redux";
import { store } from "@/store";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.string().min(1, "Category is required"),
  description: z.string().min(1, "Description is required"),
});

const FormComponent = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      category: "",
      description: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <TextEditor {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full mt-4">
          Submit
        </Button>
      </form>
    </Form>
  );
};

const App = () => {
  return (
    <>
      <Toaster />
      <Provider store={store}>
        <Drawer>
          <DrawerContent>
            <div className="p-2">
              <FormComponent />
              {/* {isLoggedIn ? (
                
              ) : (
                <div className="flex flex-col items-center gap-1 text-center">
                  <h3 className="text-2xl font-bold tracking-tight">
                    Unauthorized
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    You must be logged in to access this.
                  </p>
                  <Button className="mt-4">
                    <Link to="/login">Login</Link>
                  </Button>
                </div>
              )}*/}
            </div>
          </DrawerContent>
          <RouterProvider router={router} />
        </Drawer>
      </Provider>
    </>
  );
};

export default App;
