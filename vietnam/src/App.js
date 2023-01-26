import './App.css';
import Home from './components/Home'
import { useState } from 'react';
import Places from './components/Places'
import Contact from './components/Contact'
import Food from './components/Food'

function App() {

  function display() {
    if(currentPage===0) {
      return <Home></Home>
    }
    else if (currentPage===1){
      return <Contact></Contact>
    }
    else if(currentPage===3) {
      return <Places></Places>
    }
    else if(currentPage===4) {
      return <Food></Food>
    }
  }
    const [currentPage , setcurrentPage] = useState(0);
  return (
    <div className="App">
    {/* jsx element */}
  <Home setcurrentPage={setcurrentPage}></Home>

  {currentPage}
  {display()};
   

  </div>
  );
}

export default App;
