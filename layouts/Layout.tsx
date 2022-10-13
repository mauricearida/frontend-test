import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const Layout = (props) => {
  const router = useRouter();

  const logout = async () => {
    //on logout reset everything
    deleteLocalStorage("username");
    deleteLocalStorage("token");
    await router.push("/login");
  };

  const deleteLocalStorage = (key: any) => {
    localStorage.removeItem(key);
  };

  let menu;

  if (!props.auth) {
    //if we are not authenticated, use this part
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link href="/login">
            <a className="nav-link active">Login</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/register">
            <a className="nav-link active">Register</a>
          </Link>
        </li>
      </ul>
    );
  } else {
    //if we are authenticated, use this part
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <a href="#" className="nav-link active" onClick={logout}>
            Logout
          </a>
        </li>
      </ul>
    );
  }

  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
          crossOrigin="anonymous"
        />
      </Head>

      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">Home</a>
          </Link>

          <div>{menu}</div>
        </div>
      </nav>

      <main className="form-signin">{props.children}</main>
    </>
  );
};

export default Layout;
