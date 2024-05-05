import {useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const[data,setData] = useState([]);
  const generateData = async () =>{
    try {
      const res = await axios.get('https://restcountries.com/v3.1/all');
      setData(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    generateData();
  },[]);

  return (
    <div className="App">
      <div className='container'>
        {data.map((item)=>{
              return (
                <div className='Card'>
                  <img src = {item.flags.png} alt='Flag' height={100} width={100}/>
                  <p>{item.name.official}</p>
                </div>
                );
            })} 
      </div>
   
    </div>
  );
}

export default App;
