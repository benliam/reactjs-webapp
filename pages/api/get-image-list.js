// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import ImagesList from '../../utils/ImagesList'

export default function handler(req, res) {
  res.status(200).json({ status: 'success', data: ImagesList })
}
