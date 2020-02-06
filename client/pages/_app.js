import App from "next/app";
import Layout from "../components/_App/Layout";

class MyApp extends App {
  render() {
    const {Component} = this.props;
    return (
      <Layout>
        <Component />
        <style jsx>{`
          body {
            margin: 0;
            padding: 0;
          }
        `}</style>
      </Layout>
    );
  }
}

export default MyApp;
