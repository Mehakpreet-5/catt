import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Navbar from './components/navbar'
import './App.css'
import Content from './pages/contentPage';
function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Content/>}/>
        <Route/>
        </Routes></BrowserRouter>
    </>
  )
}

export default App
