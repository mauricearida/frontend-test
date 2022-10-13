import React, { SyntheticEvent, useState } from "react";
import Layout from "../layouts/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";

const Login = () => {
  //setting the variables states
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const signin = async (data: any) => {
    //setting the header for the API request
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.post(
      "https://maurice-backend-test.herokuapp.com/api/auth/login",
      data,
      config
    );

    return response;
  };

  //setting a localstorage item
  const setLocalStorage = (key: any, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    // building the data object
    const data = { username, password };

    signin(data)
      .then((response) => {
        setLocalStorage("token", response.data.accessToken);

        setLocalStorage("username", response.data.username);

        console.log("response login", response);
      })
      .catch((err) => {
        console.log("signn api function error: ", err);
      });
    //pushing to main page
    await router.push("/");
  };

  return (
    <Layout>
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          required
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          type="password"
          className="form-control"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    </Layout>
  );
};

export default Login;
