import React from "react";
import App, { Container } from "next/app";
import Router from "next/router";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import { Loading } from "../containers/sections";

// Styles
import "../_global.scss";

export default class MyApp extends App {
  constructor() {
    super();
    this.state = {
      loading: true,
      appLoadingScreen: true
    };
  }
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps)
      pageProps = await Component.getInitialProps(ctx);
    return { pageProps };
  }
  routeChangeStart = url => {
    this.setState({ loading: false });
  };
  routeChangeEnd = () => {
    this.setState({ loading: false });
  };
  componentDidMount() {
    Router.events.on("routeChangeStart", url => this.routeChangeStart(url));
    Router.events.on("routeChangeComplete", () => this.routeChangeEnd());
    Router.events.on("routeChangeError", () => this.routeChangeEnd());
    this.setState({ loading: false });
    this.timeout = setTimeout(
      () => this.setState({ appLoadingScreen: false }),
      2400
    );
  }
  componentWillUnmount() {
    Router.events.off("routeChangeStart", this.routeChangeStart);
    Router.events.off("routeChangeComplete", this.routeChangeEnd);
    Router.events.off("routeChangeError", this.routeChangeEnd);
    clearTimeout(this.timeout);
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ReactCSSTransitionGroup
          transitionName="app"
          transitionEnterTimeout={0}
          transitionLeaveTimeout={500}
        >
          {this.state.appLoadingScreen && <Loading />}
        </ReactCSSTransitionGroup>

        <Component {...pageProps} />
      </Container>
    );
  }
}
