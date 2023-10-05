// components/Navbar.js
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import Link from "next/link";
const Navbar = () => {
  const { user, setUser, user1 } = useContext(UserContext);

  return (
    <nav>
      <Link href="/products">Products</Link>
      <br />
      <Link href="/user">users</Link>
      <br />
      <Link href="/">dashbaord</Link>

      {user ? (
        <div>
          welcome {user1} <button onClick={() => setUser(null)}>Logout</button>
        </div>
      ) : (
        <Link href="/user/login">Login</Link>
      )}
      <style jsx>{`
        nav {
          padding: 20px;
          background-color: #333;
        }
        ul {
          display: flex;
          list-style: none;
          padding-left: 0;
        }
        li {
          margin-right: 20px;
        }
        li:last-child {
          margin-right: 0;
        }
        a {
          color: white;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
