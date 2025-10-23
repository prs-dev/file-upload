
import Form from './components/Form'
import Display from './components/Display'
import { useState } from 'react'

const App = () => {
  const [loading, setLoading] = useState(false)
  return (
    <div>
      <Form {...{loading, setLoading}}/>
      <Display {...{loading, setLoading}}/>
    </div>
  )
}

export default App