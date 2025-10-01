

import Nav  from './components/Nav';
import Home  from './pages/Home';
import Pro  from './product/Pro';
import Pro1  from './product/Pro1';
import Pro2  from './product/Pro2';
import Pro3 from './product/Pro3';



import Foot  from './footer/Foot';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
    <BrowserRouter>
   
   <Nav/>
   
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<Pro/>}/>
      <Route path="/product1" element={<Pro1/>}/>
      <Route path="/product2" element={<Pro2/>}/>
      <Route path="/product3" element={<Pro3/>}/>
      <Route path="/basket" element={<Nav/>}/>


    <Route path="*" element={<h1>Not Found</h1>}/>


   </Routes>
   </BrowserRouter>  
{/* <Foot/> */}

    </div>
  );
}



export default App;
