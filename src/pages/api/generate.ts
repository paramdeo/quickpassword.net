import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  password : string
}

const allChars : string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*[]?"

const passwordChars : Array<string> = [...allChars]

const randomize = () : string => {
  // cache the length of the array containing all the characters to be used to avoid having to lookup the array length each time the randomize() function loops through it
  let totalChars : number = passwordChars.length
  // get random array index value between zero and the array length
  let index : number = Math.floor(Math.random() * totalChars)
  return passwordChars[index]
}

const length = (desiredLength : number) : string => {
  // temporary array for holding characters
  let array : Array<string> = []
  for (let p = 0; p < desiredLength; p++) {
    // call the randomize function and push the value to the array
    array.push(randomize())
  }
  // remove the commas from the temporary array
  return array.join('')
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ password: (length(36)) })
}
