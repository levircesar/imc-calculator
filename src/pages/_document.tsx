import React from 'react'
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            // eslint-disable-next-line react/react-in-jsx-scope
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          // eslint-disable-next-line react/react-in-jsx-scope
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-V36ZDBN242&hl=pt-BR"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V36ZDBN242', { page_path: window.location.pathname });
            `
            }}
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap"
            rel="stylesheet"
          />
          <meta name="author" content="IMC Calculator" />
          <meta
            name="description"
            content="A IMC Calculator é uma empresa focada em desenvolvimento web com sites, landing pages, aplicativos. Atua em marketing digital com criação de artes, consultoria em tráfego."
          />
          <meta
            name="keywords"
            content="IMC Calculator,moderniza,sites,landing pages,aplicativos, ecomerce, loja virtual, empresa, tráfego"
          />
          <meta name="robots" content="index,follow" />
          <meta name="format-detection" content="telephone=no" />
          <meta property="og:title" content="next-template" />
          <meta property="og:site_name" content="next-template" />
          <meta
            property="og:description"
            content="A IMC Calculator é uma empresa focada em desenvolvimento web com sites, landing pages, aplicativos. Atua em marketing digital com criação de artes, consultoria em tráfego."
          />
          <meta property="og:url" content="https://modernizaweb.vercel.app" />
          <meta
            property="og:image"
            content="https://modernizaweb.vercel.app/favicon.ico"
          />
          <meta property="og:image:type" content="image/png" />

          <meta name="application-name" content="PWA App" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="IMC Calculator" />
          <meta
            name="description"
            content="Empresa de criação de Sites,Lojas virtuais, apps, e marketing digital"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content=" #fa320d" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#fa320d" />

          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/favicon.ico" color="#fa320d" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="" />
          <meta name="twitter:title" content="IMC Calculator" />
          <meta
            name="twitter:description"
            content="Empresa de criação de Sites,Lojas virtuais, apps, e marketing digital"
          />
          <meta name="twitter:image" content="" />
          <meta name="twitter:creator" content="@levircesar" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="IMC Calculator" />
          <meta
            property="og:description"
            content="Empresa de criação de Sites,Lojas virtuais, apps, e marketing digital"
          />
          <meta property="og:site_name" content="IMC Calculator" />
          <meta property="og:url" content="" />
          <meta property="og:image" content="/favicon.ico" />
          <meta httpEquiv="Content-Language" content="pt-br" />
          <script
            src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
            async
            defer></script>
          <script src="https://www.google.com/recaptcha/api.js?render=6LdPVR4bAAAAAE7p0NCTuceCRuJpR1CCuwOZmdiK"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
