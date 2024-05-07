import './App.css'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Quotes from './components/Quotes'

function App() {

  return (
    <>
      <div className='flex flex-col w-full items-center justify-between gap-10 '>
        <NavBar/>
        <Quotes/>
        <Footer/>
      </div>
    </>
  )
}

export default App