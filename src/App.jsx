import { useState } from 'react'
import {Button} from "@/components/ui/button.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Button onClick={
            () => setCount((oldCount) => oldCount + 1)
        }>Increase count!</Button>
      Hello world! Count {count}
    </>
  )
}

export default App
