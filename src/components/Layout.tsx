import React from 'react'
import GlobalStyles from './GlobalStyles'
import Header from './Header'
import Hero from './Hero'
import SEO from './SEO'

export default function Layout(): JSX.Element {
  return (
    <>
      <SEO />
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
      </main>
    </>
  )
}
