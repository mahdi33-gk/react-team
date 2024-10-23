import './App.css'
import Team from './team'

function App() {

  const appi = () => {
    alert('ok buddy')
  }
  

  return (
    <>
      
      <Team></Team>
      <h1>Vite + React</h1>
      <button onClick={appi}>Hello</button>
      
      
    </>
  )
}

export default App
