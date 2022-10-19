// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Reset } from 'styled-reset'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Reset />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <Component {...pageProps} />

    </>
  )
}

export default MyApp

