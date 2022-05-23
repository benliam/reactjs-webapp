// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Menu from '../../utils/Menu'

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe', data: Menu })
}
