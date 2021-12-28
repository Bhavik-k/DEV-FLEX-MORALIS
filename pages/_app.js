import { MoralisProvider } from 'react-moralis'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <MoralisProvider appId='zLMlAERenxCoTGvRcQEOfn0TkAqsj6CkYOENsTHV' serverUrl='https://lufeluenblon.usemoralis.com:2053/server'>
    <Component {...pageProps} />
  </MoralisProvider>
  )
}

export default MyApp
