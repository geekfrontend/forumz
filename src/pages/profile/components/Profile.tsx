import { RootState } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/store/auth/authSlice";
import { useNavigate } from "react-router-dom";
import PageHeader from "@/components/common/PageHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <PageHeader title="Profile" />
      <div className="flex items-center justify-center mt-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src={user?.avatar} alt={user?.name} />
          <AvatarFallback>{user?.name[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="grid w-full max-w-[400px] mx-auto items-center gap-2">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            type="name"
            id="name"
            className="mt-2"
            placeholder={user?.name}
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            className="mt-2"
            placeholder={user?.email}
          />
        </div>
        <div className="mt-6">
          <Button
            variant="destructive"
            onClick={handleLogout} // Use the handleLogout function
            className="w-full"
          >
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Profile;
