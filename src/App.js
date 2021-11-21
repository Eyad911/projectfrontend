
import './App.css';
import React ,{ useState,useEffect } from 'react';
import axios from 'axios';


const BASE_URL = "http://localhost:5000";
function App() {

  const [product, setProduct] = useState([]);
  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = async () => {
    const product = await axios.get(`${BASE_URL}/electronics`);

    setProduct(product.data);
    console.log(product.data);
  };
  return (
    <div className="App">
      {product.map((prod) => (
          <div className='divContener'>
          <img src={prod.Pic} id='imgDev'/>
          <h2>{prod.Name} </h2>
          <p>{prod.Price}</p>
          
          
          </div>
        ))}
    </div>
  );
}

export default App;
