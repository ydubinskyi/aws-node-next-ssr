import React from 'react';
import Head from 'next/head';

import Header from './Header/Header';

export default class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Next AWS Lambda example</title>
        </Head>
        <Header />
        <div className="layout">{children}</div>
      </React.Fragment>
    );
  }
}
