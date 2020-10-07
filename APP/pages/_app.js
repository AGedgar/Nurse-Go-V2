import React from 'react';
import App from 'next/app';
import Head from 'next/head'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    let { Component, pageProps } = this.props
    let getLayout = Component.getLayout || ((page, pageProps) => page );

    return (
      <div>
        <Head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        </Head>
        <style global jsx>{`
          html, body{
            margin:0;
            padding:0;
            width: 100%;
            height: 100%;
            position: relative;
            font-family: 'Roboto', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          #__next{
              width: 100%;
              height: 100%;
          }
        `}</style>
        {getLayout(<Component {...pageProps}></Component>, pageProps)}
      </div>
    );
  }
}

export default MyApp;