import Head from 'next/head'
import Script from 'next/script'
import config from '../site_config'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>{config.title}</title>
        <link rel="icon" href={config.favicon} />
        <meta name="description" content={config.description} />
      </Head>
      <main>
        <h1>This site is moved permanently.</h1>
        <p>
          If the page has not jumped automatically,
          click <a href={config.base} title={config.title}>here</a> to jump to the homepage manually.
        </p>
      </main>
      <Script id="404">{`location.replace(new URL(location.pathname, '${config.base}'));`}</Script>
    </>
  )
}
