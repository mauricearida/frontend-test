import Layout from "../layouts/Layout";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [auth, setAuth] = useState(false);

  const getLocalStorage = (key: any) => {
    return JSON.parse(localStorage.getItem(key));
  };

  useEffect(() => {
    if (getLocalStorage("token")) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  });

  const getdDisplay = () => {
    setTimeout(() => {
      if (getLocalStorage("username")) {
        console.log("1111");
        setMessage(`Hi ${getLocalStorage("username")}`);
        console.log('getLocalStorage("username")', getLocalStorage("username"));
      } else {
        console.log("22222");
        setMessage("no one is logged in");
        console.log('getLocalStorage("username")', getLocalStorage("username"));
      }
    }, 650);
  };

  useEffect(() => {
    getdDisplay();
  });

  return <Layout auth={auth}>{message}</Layout>;
}
