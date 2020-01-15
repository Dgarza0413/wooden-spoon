import React from "react";
import Link from "next/link";

import {Grid} from "@material-ui/core";
// import NProgress from 'nprogress';

// Router.onRouteChangeStart = () => NProgress.start();
// Router.onRouteChangeComplete = () => NProgress.done();
// Router.onRouteChangeError = () => NProgress.done();

const Header = () => {
  return (
    // <Router>
    <Grid container>
      <Link href="/">
        <div>Home</div>
      </Link>
      <Link href="/account">
        <div>My Account</div>
      </Link>
    </Grid>
  );
};

export default Header;
