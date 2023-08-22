import propTypes from 'prop-types';
import Head from 'next/head';

App.propTypes = {
  Component: propTypes.func.isRequired,
  pageProps: propTypes.shape({}).isRequired,
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>datepicker - test</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
