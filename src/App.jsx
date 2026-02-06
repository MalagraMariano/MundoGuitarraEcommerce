import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
