import { useStore } from '@nanostores/react'

import { $counter, increaseCounter } from '../stores/counter'

export const Counter = () => {
  const counterValue = useStore($counter)

  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-lg leading-8 text-gray-600">{counterValue}</span>
      <button
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={increaseCounter}
        type="button"
      >
        Increase
      </button>
    </div>
  )
}
