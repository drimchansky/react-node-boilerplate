import { Link } from '@tanstack/react-router'

export const Header = () => {
  return (
    <div className="p-2 flex gap-2">
      <Link className="[&.active]:font-bold" to="/">
        Home
      </Link>
      <Link className="[&.active]:font-bold" to="/about">
        About
      </Link>
    </div>
  )
}
