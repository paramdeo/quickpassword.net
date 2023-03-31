import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  password : string
}

const allChars : string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*[]?"

const passwordChars : Array<string> = [...allChars]

const randomize = () : string => {
  let totalChars : number = passwordChars.length
  let index : number = Math.floor(Math.random() * totalChars)
  return passwordChars[index]
}

const length = (desiredLength : number) : string => {
  let array : Array<string> = []
  for (let p = 0; p < desiredLength; p++) {
    array.push(randomize())
  }
  return array.join('')
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ password: (length(36)) })
}
