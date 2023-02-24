import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import './styles/style.scss'
import {BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
