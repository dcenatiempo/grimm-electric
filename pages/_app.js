import 'styles/globals.css'
import 'styles/reset.css'

function MyApp({ Component, pageProps }) {
    // https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/
    const Layout = Component.layout || (children => <>{children}</>)

    return (
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    )
}

export default MyApp
