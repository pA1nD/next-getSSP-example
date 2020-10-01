import Link from 'next/link'
import Layout from '../components/Layout'
import Cookies from 'cookies'

const IndexPage = () => (
  <Layout title='Home | Next.js + TypeScript Example'>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href='/about'>
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage

export const getServerSideProps = ctx => {
  const cookies = new Cookies(ctx.req, ctx.res)

  cookies.set('auth', 'true', {
    httpOnly: true, // true by default
  })

  return {
    props: {},
  }
}
