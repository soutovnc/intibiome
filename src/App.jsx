import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'


export default function App() {

  return (
    <ThemeProvider theme={defaultTheme}>

      <h1>let's get start!</h1>

      <GlobalStyle />
    </ThemeProvider>
  )
}
