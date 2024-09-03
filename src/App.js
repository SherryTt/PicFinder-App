import logo from './logo.svg';
import './App.css';
import ImageGarally from './components/ImageGarally';


function App() {
  return (
    <div className="container">
      <h2>My PicFinder</h2>
      <form>
        <input type="Text" placeholder='Search images ...' />
      </form>
      <ImageGarally />
    </div>
  );
}

export default App;
