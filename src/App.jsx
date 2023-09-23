import { useState } from 'react'
import UseEffectDemo from './components/useEffect'
import UseCallbackDemo from './components/useCallback'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseCallbackDemo />
    </>
  )
}

export default App
