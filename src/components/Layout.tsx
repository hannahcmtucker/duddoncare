import React from 'react'
import GlobalStyles from './GlobalStyles'
import Header from './Header'
import Hero from './Hero'
import SEO from './SEO'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'

export default function Layout(): JSX.Element {
  return (
    <>
      <SEO />
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
