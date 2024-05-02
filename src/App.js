import './App.css';
import Header from './Header';
import weblogo from './images/logos.svg';

function App() {

  let displayData = () => {
    alert("Welcome to page")
  }
  return (
    <div className="App">
      <img width={200} src={weblogo} alt='weblogo' />
      <button className='bg-[red] p-[10px]' onClick={displayData}>Save</button>
      <Header />
      <h1 className='text-[40px] text-red-600 font-bold'>Welcome to Page</h1>
    </div>
  );
}

export default App;
