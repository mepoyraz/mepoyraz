import 'bootstrap/dist/css/bootstrap.min.css'
import "@styles/_globals.scss"
import "@styles/_theme.scss"
import { ThemeProvider } from "next-themes"

import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
