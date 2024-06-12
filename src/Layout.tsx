import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/challenges/badge-variables">Badge Variables</Link>
          </li>
          <li>
            <Link to="/challenges/adjacent-elements">Adjacent Elements</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;