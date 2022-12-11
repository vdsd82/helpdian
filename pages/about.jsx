import Head from 'next/head'
import Container from '../components/Layout/Container'
import Layout from '../components/Layout/Layout'
import { BLOG_NAME } from '../lib/constants'
import PageHeading from '../components/PageHeading'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About | {BLOG_NAME}</title>
      </Head>
      <Container>
        <PageHeading>About us</PageHeading>
        <section className="max-w-3xl mx-auto py-8 md:py-16 lg:py-24">
          <p>
            Helpdian site is one stop place for all your medical calculators
          </p>
          <br />
          <p>
            We also provide information regarding to your wellbeing
          </p>
        </section>
      </Container>
    </Layout>
  )
}
