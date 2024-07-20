import { createLazyFileRoute } from '@tanstack/react-router'

import { Counter } from '../components/Counter'

export const Route = createLazyFileRoute('/')({
  component: Index
})

function Index() {
  return (
    <div className="p-2">
      <Counter />
    </div>
  )
}
