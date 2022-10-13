import Layout from "../layouts/Layout";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [auth, setAuth] = useState(false);

  //getting an already set local storage item
  const getLocalStorage = (key: any) => {
    return JSON.parse(localStorage.getItem(key));
  };

  //setting the variables states
  useEffect(() => {
    if (getLocalStorage("token")) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  });

  const getdDisplay = () => {
    //timeout set since useeffect is faster than getLocalStorage
    //(should have been done using passing states when pushing to next page)
    setTimeout(() => {
      if (getLocalStorage("username")) {
        setMessage(`Hi ${getLocalStorage("username")}`);
      } else {
        setMessage("no one is logged in");
      }
    }, 650);
  };

  useEffect(() => {
    getdDisplay();
  });

  return <Layout auth={auth}>{message}</Layout>;
}
