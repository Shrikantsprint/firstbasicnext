import { useState } from "react";
import Navbar from "../layout/common/navbar";
import UserContext from "../contexts/UserContext";
import "../styles/globals.css";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null); // null means not logged in
  const [user1, setUser1] = useState(null); // null means not logged in
  const router = useRouter();

  useEffect(() => {
    const publicRoutes = ["/user/login", "/products", "/user", "/user/[slug]"];
    // If user is not logged in and the route is not public, redirect to login
    if (!user && !publicRoutes.includes(router.pathname)) {
      router.push("/user/login");
    }

    if (localStorage.getItem("user")) {
      setUser(true);
    }
  }, [user, router]);

  return (
    <UserContext.Provider value={{ user, setUser, user1, setUser1 }}>
      <Navbar />
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
