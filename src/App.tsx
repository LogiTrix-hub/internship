import { useState } from 'react'
import { Button, DatePicker } from 'antd'

function App() {
  const [count, setCount] = useState<number>(0);

  const increase = () => {
    setCount(prev => prev + 1)
  }

  const decrease = () => {
    setCount(prev => prev - 1)
  }

  return (
    <>
      <DatePicker />
      <div>
      <Button onClick={increase} type="primary">Increase</Button>
      <Button onClick={decrease} type="primary" danger>
        Decrease
      </Button>
        <h1>Counter: {count}</h1>
      </div>
    </>
  )
}

export default App
