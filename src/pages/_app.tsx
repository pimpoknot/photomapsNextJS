import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS - Boilerplate</title>
        <link rel="shortcut icon" href="#" />
        <link rel="apple-touch-icon" href="#" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta name="description" content="Simples projeto em NextJS" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
