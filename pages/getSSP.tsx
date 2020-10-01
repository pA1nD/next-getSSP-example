import Layout from '../components/Layout'
import fetch from 'node-fetch'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const getSSPPage = props => {
  const router = useRouter()
  const [loading, setLoading] = useState(props.error === 403)

  useEffect(() => {
    const load = async () => {
      if (props.error === 403) {
        const res = await fetch('/api/refresh')
        console.log(res)
        // location.reload()
        router.push('/getSSP')
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <Layout title='getServerSideProps'>
      {loading ? (
        'Loading...'
      ) : (
        <>
          <h1>getServerSideProps</h1>
          <p>{props.test}</p>
        </>
      )}
    </Layout>
  )
}

export default getSSPPage

export const getServerSideProps = async ctx => {
  const res = await fetch('http://localhost:3000/api/data', {
    headers: { Cookie: `${ctx.req.headers.cookie}` },
  })
  console.log(res.status)

  if (res.status === 403) return { props: { error: 403 } }

  return { props: { test: 'Hello there!' } }
}
