import { NavLink } from "react-router-dom";

function Navbar() {
  const isCreator = true;
  return (
    <nav className="container mx-auto bg-dark flex py-4 items-center justify-between">
      <NavLink to="/">
        <h1 className="text-blue-800 font-bold text-2xl">Explora</h1>
      </NavLink>
      <ul className="flex items-center font-semibold text-l">
        <NavLink to="/">
          <li className="pl-4">Home</li>
        </NavLink>
        <NavLink to="/videos">
          <li className="pl-4">Videos</li>
        </NavLink>
        <NavLink to="/notifications">
          <li className="pl-4">Notifications</li>
        </NavLink>
        <NavLink to="/">
          <li className="pl-4">Logout</li>
        </NavLink>
        {
          isCreator && <li className="pl-4">
          <button className="bg-blue-400 px-3 py-1 rounded-full text-white hover:bg-blue-800">
            Upload Video
          </button>
        </li>
        }
      </ul>
    </nav>
  );
}

export default Navbar;
