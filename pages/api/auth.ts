import { NextApiRequest, NextApiResponse } from 'next'
import Cookies from 'cookies'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  const cookies = new Cookies(_req, res)

  cookies.set('auth', 'true', {
    httpOnly: true, // true by default
  })

  cookies.set('refresh', 'superSecret', {
    httpOnly: true, // true by default
    path: '/api/refresh',
  })

  res.status(200).end()
}

export default handler
