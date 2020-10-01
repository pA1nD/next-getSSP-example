import { NextApiRequest, NextApiResponse } from 'next'
import Cookies from 'cookies'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  const cookies = new Cookies(_req, res)
  // Get a cookie
  const isAuth = cookies.get('auth')
  if (!isAuth) return res.status(403).end()
  res.status(200).json({ id: 101, name: 'Alice' })

  // res.status(500).json({ statusCode: 500, message: err.message })
}

export default handler
