import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

export default function about() {
    return (
        <Layout pageTitle={"I am the Abouut page"}>
            <p>WWhy should I have something like this??</p>
            <h3>Because of this:</h3>
            <StaticImage
                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="../images/doggy.webp"
            />
            <Link to='/'>Back to home</Link>
        </Layout>
    )
}

