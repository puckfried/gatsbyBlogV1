import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default function Blog({data}) {
    console.log(data.allFile.nodes)
    return (
        <Layout pageTitle="BlogPosts">
            <p>Lets get fancy</p>
            <ul>
            {
                data.allFile.nodes.map(node => (
                    <li>{node.name}</li>
                ))
            }
            </ul>
        </Layout>
    )
}

export const query = graphql`
query {
    allFile {
      nodes {
        name
      }
    }
  }`
