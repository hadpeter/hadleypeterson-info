// These styles apply to every route in the application
import './globals.css'
import Head from 'next/head';
 
export const metadata = {
  title: 'Hadley Peterson',
  description: 'About Hadley Peterson',
  icon: '/favicon.ico',
  thumbnail: '/smallicon.ico'
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{`Work: Hadley Peterson`}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta
          name="description"
          content="About Hadley Peterson"
        />
      </Head>
      <body>{children}</body>
    </html>
  )
}