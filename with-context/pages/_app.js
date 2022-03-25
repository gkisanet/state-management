import '../styles/globals.css'
import { PokemonProvider } from '../src/store'

function MyApp({ Component, pageProps }) {
  return (
    // pokemon의 props는 어디서 들고오나
    // page에서 getServerSideProps를 하면 거기서 받는 props가 _app.js의 pageprops로 서로 공유된다고 함.
    // pageProps => pageProps.pokemon  으로 안해서 에러났음.
    <PokemonProvider pokemon={pageProps.pokemon}>
      <Component {...pageProps} />
    </PokemonProvider>
  )
}

export default MyApp
