import Head from "next/head";
import {Grid} from "@material-ui/core";

import Header from "./Header";
// import HeadContent from "./HeadContent";

const Layout = props => {
  return (
    <>
      <Head>
        <title>Wooden Spoon</title>
      </Head>
      <Header />
      <Grid container>{props.children}</Grid>
    </>
  );
};

export default Layout;
