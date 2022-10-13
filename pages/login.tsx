import React, { SyntheticEvent, useState } from "react";
import Layout from "../layouts/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const signin = async (data: any) => {
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

  const setLocalStorage = (key: any, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const data = { username, password };
    console.log("data login", data);
    signin(data)
      .then((response) => {
        setLocalStorage("token", response.data.accessToken);
        console.log("1212121");
        setLocalStorage("username", response.data.username);
        console.log("23232323");
        console.log("response login", response);
      })
      .catch((err) => {
        console.log("signn api function error: ", err);
      });

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
