// import Form1 from "./Component/Form1"
// import Form2 from "./Component/Form2"
import {BrowserRouter, Route, Routes} from "react-router-dom"
// import Home from "./Component/Home"
// import About from "./Component/About"
// import Contact from "./Component/Contact"
import Navbar from "./Component/Navbar"
import {lazy, Suspense} from "react"

const Home = lazy(() => import(('./Component/Home')))
const About = lazy(() => import(('./Component/About')))
const Contact = lazy(() => import(('./Component/Contact')))



function App() {


  // const [Home, setHome] = useState(null)
  // const [About, setAbout] = useState(null)
  // const [Contact, setContact] = useState(null)
  
  // useEffect(()=>{
  //   import('./Component/Home').then((module)=> setHome(()=> module.default))
  // },[])

  return (
    <>
    <h1>Hello</h1>
    {/* <Form1></Form1> */}
    {/* <Form2></Form2> */}
    <BrowserRouter>
    <Navbar></Navbar>

    <Suspense fallback={<div>Loading...</div>}>

      <Routes>
        {/* <Route path="/" element={<Navbar></Navbar>}></Route> */}
        {/* <Route path="/" element= {Home ? <Home></Home> : <div>Loading....</div>}></Route>
        <Route path="/about" element= {About ? <About></About> : <div>Loading...</div>}></Route>
        <Route path="/contact" element= {Contact ? <Contact></Contact> : <div>Loading...</div>}></Route> */}
        
        <Route path="/" element= {<Home></Home>}></Route>
        <Route path="/about" element= {<About></About>}></Route>
        <Route path="/contact" element= { <Contact></Contact>}></Route>

      </Routes>
      </Suspense>
    </BrowserRouter>
    
     </>
  )
}

export default App
