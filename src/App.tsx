import { useState, Suspense } from 'react'
import './App.css'
import { AlwaysSuspend, SometimeSuspend, DataLoader } from "./components/AlwaysSuspend"
import { RenderingNotifier } from "./components/RenderingNotifier"

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)

  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <DataLoader />
      </Suspense>
      {/* <RenderingNotifier name='outside-Suspense' />
      <Suspense fallback={<div>loading...</div>}>
        <SometimeSuspend />
        <RenderingNotifier name='inside-Suspense' />
        <button className='border p-1' onClick={() => setCount((c) => c + 1)}>
          {count}
        </button>
      </Suspense> */}
    </div>
  )
}

export default App
