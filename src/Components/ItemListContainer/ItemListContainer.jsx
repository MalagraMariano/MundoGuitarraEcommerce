const ItemListContainer = ({ saludo, saludar }) => {

  return (
    <div>
      <h2 style={{ color: 'black' }}>{saludo}</h2>
      <button onClick={saludar} >Clickeame</button>
    </div>
  )
}

export default ItemListContainer