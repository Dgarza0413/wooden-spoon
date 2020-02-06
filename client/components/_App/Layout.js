import Head from "next/head";
import {Grid} from "@material-ui/core";

import Header from "./Header";
import SearchBarNav from "../Navbar/Navbar";
import HeadContent from "./HeadContent";

const Layout = ({children}) => {
  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
      <Head>
        <HeadContent />
        {/* <link rel="stylesheet" type="text/css" href="../../public/styles.css" /> */}
        <title>Wooden Spoon</title>
      </Head>
      <SearchBarNav />
      <Header />
      <Grid container>{children}</Grid>
    </>
  );
};

export default Layout;
