import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/counter')({
  component: Counter
})

function Counter() {
  return <div className="p-2">Hello from Counter!</div>
}
