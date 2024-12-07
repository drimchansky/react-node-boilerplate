import { Link } from 'react-router-dom'

import { Container } from '@/shared/ui/Container'

export const Header = () => {
  return (
    <header className="bg-gray-100">
      <Container className="flex gap-2 p-2">
        <Link className="[&.active]:font-bold" to="/">
          Home
        </Link>
        <Link className="[&.active]:font-bold" to="/about">
          About
        </Link>
      </Container>
    </header>
  )
}
