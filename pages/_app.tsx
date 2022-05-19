import { Amplify } from 'aws-amplify'
import '../styles/globals.css'

import { Authenticator } from '@aws-amplify/ui-react'
import type { AppProps } from 'next/app'
import config from '../src/aws-exports'

import '@aws-amplify/ui-react/styles.css'

Amplify.configure({ ...config, ssr: true })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Authenticator>
      <Component {...pageProps} />
    </Authenticator>
  )
}

export default MyApp
