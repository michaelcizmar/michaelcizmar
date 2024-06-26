import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  const meta = {
    title: 'Welcome to Michael Cizmar\'s site',
    description: 'This is the personal site of Michael B. Cizmar',
    image: 'https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="msvalidate.01" content="3B340CB99F1D03708E0BF22298604557" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      
    </Html>
  )
}