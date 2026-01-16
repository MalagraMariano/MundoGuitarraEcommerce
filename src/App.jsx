import './App.css'
import NavBar from './Components/NavBar/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {

  const saludar = () => {
    alert("Hola! Gracias por cliquearme.");
  }

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo={"Hola Mundo Guitarra"} saludar={saludar} />
      <Footer />
    </div>
  )
}

export default App
