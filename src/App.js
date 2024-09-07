import logo from './logo.svg';
import './App.css';
import ImageGarally from './ImageGarally';
import { useRef, useState } from 'react';


function App() {

  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSearcBtnClick = (e) => {
    e.preventDefault();
    console.log(ref.current.value);

    //API URL
    const endPointUrl = 
    `https://pixabay.com/api/?key=45781910-25c23dd0ad84f2bd4fc77bf77&q=${ref.current.value}&image_type=photo`;
  
    //fetch data
    fetch(endPointUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.hits);
        setFetchData(data.hits);
      });

  };

  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSearcBtnClick(e)}> 
        <input type="Text" placeholder='Search images ...' ref={ref} />
      </form>
      <ImageGarally fetchData={fetchData} />
    </div>
  );
}

export default App;
