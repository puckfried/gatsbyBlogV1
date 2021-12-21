import React from 'react'
import Navbar from './Navbar'
import {container, heading, siteTitle} from './layout.module.css'
import { useStaticQuery, graphql } from 'gatsby'

export default function Layout({pageTitle, children}) {
    
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }`)
    
    
    return (
        <div className={container}>
            <title>{pageTitle}</title>
            <header className={siteTitle}>
                {data.site.siteMetadata.title}
            </header>
            <Navbar />
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}