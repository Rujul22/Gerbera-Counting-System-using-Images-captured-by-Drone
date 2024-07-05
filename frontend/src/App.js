import './App.css';
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';

import {BrowserRouter, Route,Routes} from 'react-router-dom'; //for routing purpose
// import MyNotes from './screens/MyNotes/MyNotes';
import RegisterScreen  from './screens/RegisterScreen/RegisterScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import Home from './project/HomeScreen';

function App() {
  return (
    <BrowserRouter>
    {/* <Header/> */}
    <main >
      <Routes>
      <Route path='/' Component={Home} exact/>
      <Route path='/login' Component={LoginScreen} exact/>
      <Route path='/register' Component={RegisterScreen} exact/>
      {/* <Route path='/mynotes' Component={()=><MyNotes/>}/> */}
      </Routes>
    </main>
    {/* <Footer/> */}
    </BrowserRouter>
  );
}
export default App;