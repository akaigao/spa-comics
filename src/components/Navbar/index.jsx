import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavItem, NavList } from './style'

export function Navbar() {
  const router = useRouter()

  return (
    <nav>
      <NavList>
        <NavItem>
          <Link href="/">
            Home
            <hr className={router.pathname === '/' ? 'active' : ''} />
          </Link>
        </NavItem>
      </NavList>
    </nav>
  )
}
