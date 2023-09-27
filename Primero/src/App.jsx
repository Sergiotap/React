import './App.css'
import {Header} from './Header'
import {Content} from './Content'
import {Total} from './Total'

function App() {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header/>      
      <Content exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} /> 
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />

    </div>
  )
}

export default App
