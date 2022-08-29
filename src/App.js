import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{ useState } from 'react';
import Alert from './Components/Alert';

//react-router-dom
import {BrowserRouter,Switch, Route} from "react-router-dom";

function App() {

const [mode,setMode]=useState('light');
const [alert, setAlert] = useState(null);

const shwoAlert =(message, type) => {
     setAlert({
      msg : message,
      type: type,
     })
}

setTimeout(() => {
  setAlert(null);
},1500);


const toggleMode = ()=>{
  if(mode==='light'){
    setMode('dark')
   document.body.style.backgroundColor = '#042743';
   shwoAlert("Dark Mode Enabled", "success");
   document.title='TextUtils - Dark Mode';
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
    shwoAlert("Light mode enabled", "success");
    document.title='TextUtils - Light Mode';
  }
}

  return (
    
    <BrowserRouter>
      <Navbar title="textUtil" mode={mode} toggleMode={toggleMode} abtText="About us"/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
       <Route path="/about" exact><About/></Route>
       <Route path="/" >
          <TextForm shwoAlert={shwoAlert} heading="Enter the text to analyze" mode={mode}/>
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
