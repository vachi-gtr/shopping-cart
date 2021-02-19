import React,{useState} from 'react'
import './App.css';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] = useState([]);
  const [page,setPage] = useState(PAGE_PRODUCTS);
  const [products] = useState([
    {
      name:'AA Battery',
      cost: '$2.99',
      image: 'data:image/jpeg;base64,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'
    },    
    {
      
      name:'Blanket',
      cost: '$19.99',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeCGlfwUTn-LtftJWKgPj2Vws4bEDxIonxTVlliCGUhdVL3Fr5v3s8evYXUWtkaCzzeb347gPbZT4&usqp=CAc'
    
    },
    {
      
      name:'Blanket',
      cost: '$19.99',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeCGlfwUTn-LtftJWKgPj2Vws4bEDxIonxTVlliCGUhdVL3Fr5v3s8evYXUWtkaCzzeb347gPbZT4&usqp=CAc'
    
    },
  ]);

  const addToCart = (product) =>{ 
    setCart([...cart,{... product}])
  };

  const removeFromCart=(productToRemove)=>{
    setCart(cart.filter((product)=> product !== productToRemove))
  }
  

  const navigateTO=(nextpage)=>{
    setPage(nextpage);

  }
  const renderProducts =() =>(
    <>
    <h1>Products</h1>
     <div className='products'>
     {products.map((product,idx)=>(
       <div className="product" key={idx}>
         <h3>{product.name}</h3>
         <h4>{product.cost}</h4>
         <img src={product.image}  />
         <button onClick={() => addToCart(product)}>Add to Cart</button>
       </div>
     ))}       
     </div>
    </>
  )

  const renderCart =()=>(
    <>
    <h1>Cart</h1>
     <div className='products'>
     {cart.map((product,idx)=>(
       <div className="product" key={idx}>
         <h3>{product.name}</h3>
         <h4>{product.cost}</h4>
         <img src={product.image}/>
         <button onClick={()=>removeFromCart(product)}>Remove</button>
       </div>
     ))}       
     </div>
  </>
  )
  return (
    <div className="App">
      <header>      
      <button onClick={()=>navigateTO(PAGE_PRODUCTS)}> View Products </button>
      <button onClick={()=>navigateTO(PAGE_CART)}>GotoCart ({cart.length})</button>
      </header>

      {page === PAGE_PRODUCTS && renderProducts()}     
      {page === PAGE_CART && renderCart()}     
     </div>
  );
}

export default App;
