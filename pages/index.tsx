import Layout from '../components/Layout'

const IndexPage = () => {
  const handleClick = async () => {
    const res = await fetch('/api/auth')
    console.log(res)
  }

  return (
    <Layout title='Home'>
      <h1>Hello Next.js 👋</h1>
      <button onClick={handleClick}>Set Cookies (Login)</button>
    </Layout>
  )
}

export default IndexPage
