import React from "react";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Header = () => {
  return (
    <>
      <Link href="/">
        <div>Home</div>
      </Link>
      <Link href="/account">
        <div>My Account</div>
      </Link>
      <Link href="/search">
        <div>Search</div>
      </Link>
    </>
  );
};

export default Header;
