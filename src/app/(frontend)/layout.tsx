import React from 'react'
import Header from '@/app/(frontend)/components/Header'
import Footer from '@/app/(frontend)/components/Footer'

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  )
}
