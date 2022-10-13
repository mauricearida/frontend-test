import React, { SyntheticEvent, useState } from "react";
import Layout from "../layouts/Layout";
import { useRouter } from "next/router";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const signup = async (data: any) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.post(
      "https://maurice-backend-test.herokuapp.com/api/auth/register",
      data,
      config
    );

    return response;
  };

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    // await fetch('http://localhost:8000/api/register', {
    //     method: "POST",
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify({
    //         username,

    //         password
    //     })
    // });

    const data = { username, password };
    console.log("data", data);

    signup(data)
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log("signn api function error: ", err);
      });

    await router.push("/login");
  };

  return (
    <Layout>
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please register</h1>

        <input
          className="form-control"
          placeholder="username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default Register;
