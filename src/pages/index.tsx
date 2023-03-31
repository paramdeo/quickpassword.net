import Head from 'next/head'

import { useEffect, useState } from 'react'

export default function Home() {

// sane default characters
const allChars : string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*[]?"

// [...string] sytntax requires "target": "esnext" in tsconfig.json (es2015+ to be specific)
const passwordChars : Array<string> = [...allChars]

let passwordLength : number = 36

const randomize = () : string => {
  // cache the length of the array to avoid looking up length each time randomize() is called
  let totalChars : number = passwordChars.length
  // get random array index value between zero and the array length
  let index : number = Math.floor(Math.random() * totalChars)
  // return random array index value
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

const regeneratePassword = () : void => {
  let newPassword : string = length(passwordLength)
  // use setter to update state variable with new random password
  setQuickPassword(newPassword)
}

const copyToClipboard = (password: string) : void => {
  // previously had to chain .replaceAll('&amp;', '&') in older implementations
  navigator.clipboard.writeText(password)
}

const [quickPassword, setQuickPassword] = useState('')

// use empty dependency array so as to run only once (on page load)
useEffect(() => {
  regeneratePassword()
}, [])

  return (
    <>
      <Head>
        <title>QuickPassword</title>
        <meta name="description" content="A password generator covering 99% of use cases." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://quickpassword.net" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <meta property="og:title" content="QuickPassword" />
        <meta name="twitter:title" content="QuickPassword" />
        <meta property="og:site_name" content="QuickPassword" />
        <meta property="og:description" content="A password generator covering 99% of use cases." />
        <meta name="twitter:description" content="A password generator covering 99% of use cases." />
        <meta property="og:image" content="./opengraph-quickpassword.png" />
        <meta name="twitter:image" content="./opengraph-quickpassword.png" />
        <meta property="og:url" content="https://quickpassword.net" />
        <meta name="twitter:url" content="https://quickpassword.net" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="mx-auto max-w-screen-xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            QuickPassword
          </h1>
          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            A password generator for 99% of use cases.<br/>36 Chars. Generate. Copy. Done.
          </p>
          <div
            className="mt-2 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <div>
              <label className="sr-only">Password</label>
              <div className="relative">
                <p
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm text-center shadow-sm"
                  ><strong>{quickPassword}</strong></p>
              </div>
            </div>
            <button
              className="block w-full rounded-lg bg-slate-950 hover:bg-gray-700 px-5 py-3 text-sm font-medium text-slate-50"
              onClick={regeneratePassword}>
              Regenerate Password
            </button>
            <button
              className="block w-full rounded-lg bg-slate-800 hover:bg-gray-700 px-5 py-3 text-sm font-medium text-slate-50"
              onClick={() => copyToClipboard(quickPassword)}>
              Copy to Clipboard
            </button>
            <p className="text-center text-xs text-gray-500">
            Copyright &copy; <a href="https://paramdeo.com" target="_blank" title="Personal website of Paramdeo Singh">Paramdeo Singh</a> <strong>·</strong> Made with ☕️ in 🇬🇾
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
