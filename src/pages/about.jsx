import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'


export default function about() {
    return (
        <Layout pageTitle={"I am the Abouut page"}>
            <p>WWhy should I have something like this</p>
            <Link to='/'>Back to home</Link>
        </Layout>
    )
}
