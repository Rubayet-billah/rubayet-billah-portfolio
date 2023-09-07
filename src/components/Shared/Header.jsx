import { Link } from "react-router-dom";

const Header = () => {
  const menu = (
    <>
      <li>
        <a className="hover:bg-transparent" href="/#home">
          Home
        </a>
        {/* <Link to='/'>Home</Link> */}
      </li>
      <li>
        <a className="hover:bg-transparent" href="/#about">
          About
        </a>
      </li>
      <li>
        <a className="hover:bg-transparent" href="/#skills">
          Skills
        </a>
      </li>
      <li>
        <a className="hover:bg-transparent" href="/#projects">
          Projects
        </a>
      </li>
      <li>
        <a className="hover:bg-transparent" href="/#contacts">
          Contacts
        </a>
      </li>
      <li>
        {/* <a href="/blogs">Blogs</a> */}
        <Link className="hover:bg-transparent" to="/blogs">
          Blogs
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-zinc-900 lg:px-20 fixed z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded w-52"
          >
            {menu}
          </ul>
        </div>
        <a href="/" className="btn btn-ghost text-2xl uppercase">
          Portfolio
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
    </div>
  );
};

export default Header;
