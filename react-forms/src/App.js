import './App.css';
import { useState } from 'react';
import FormFormik from './components/FormFormik/FormFormik';
import Forms from './components/Forms/Forms';
import FormsValidation from './components/FormsValidation/FormsValidation';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';

function App() {

  const [loggedin, setLoggedIn] = useState(false)

  const login = () => { 
    setLoggedIn(true)
  }
  return (
    <div className="App">
      <Navigation auth={ loggedin} />
			<div class="container">
				{/* <Form/>  */}
        { !loggedin && <FormsValidation onLogin={ login} /> }
        { loggedin&&<Home/>}
				{/* <FormFormik/> */}
			</div>
		</div>
	);
}

export default App;