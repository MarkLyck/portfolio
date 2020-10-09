import { CacheProvider, ThemeProvider } from '@emotion/react'
import { cache } from '@emotion/css'
import { GlobalStyles } from '~/common/styles'
import theme from '~/lib/theme'

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <CacheProvider value={cache}>
      {GlobalStyles}
      <Component {...pageProps} />
    </CacheProvider>
  </ThemeProvider>
)


export default App