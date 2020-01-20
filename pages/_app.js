import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import {Provider} from 'react-redux'

import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../theme.js'
import createStore from '../store'

class IncoiceApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ctx})
    }

    return {
      pageProps,
      env: process.env.API_ROOT
    }
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const {Component, pageProps, store} = this.props;

    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default withRedux(createStore)(withReduxSaga({async: true})(IncoiceApp))