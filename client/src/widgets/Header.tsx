import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="flex gap-2 p-2">
      <Link className="[&.active]:font-bold" to="/">
        Home
      </Link>
      <Link className="[&.active]:font-bold" to="/about">
        About
      </Link>
    </div>
  )
}
