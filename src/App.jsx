import { Outlet } from 'react-router'
import './App.css'
import Header from './components/Header'
import Selector from './components/Selector'
import Friends from './components/Friends'
function App() {
  return (
    <>
     <Header content='Your Own SplitWise'/>
     <div className='layout'>
      <Selector/>
     <Outlet />
     <Friends/>
     </div>
    </>
  )
}

export default App
