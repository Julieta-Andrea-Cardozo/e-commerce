import { useState } from 'react'

function Contador() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2 style={{ color: count === 0 ? 'red' : 'green' }}>
        {count}
      </h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Contador