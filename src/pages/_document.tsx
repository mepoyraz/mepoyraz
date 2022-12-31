import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Nunito:wght@500&display=swap"
          rel="stylesheet"
        />
        {/* <link rel="shortcut icon" type="image/svg+xml" href="static/clic.svg" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
