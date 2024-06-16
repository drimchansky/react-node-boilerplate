import { createLazyFileRoute } from '@tanstack/react-router'

import { Counter } from '../features/counter'

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
