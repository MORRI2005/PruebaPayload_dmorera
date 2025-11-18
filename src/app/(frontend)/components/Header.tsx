import Link from 'next/link'
import '@/app/(frontend)/components/Header.css'

export default function Header() {
  return (
    <header id="header_comp">
      <h1>Hola que tal</h1>
      <nav>
        <Link href={'/landing'}>landing page</Link>
        <Link href={'/other'}>other</Link>
      </nav>
    </header>
  )
}
