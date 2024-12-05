import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex gap-3 w-full p-2 justify-end">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  );
};

const Template = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Template;
