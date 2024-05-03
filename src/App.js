import { useState } from 'react';
import './App.css';
import Header from './Header';
import weblogo from './images/logos.svg';

function App() {

  let [count, newCount] = useState(1);
  let [pshow, newShow] = useState(true);
  let displayData = () => {
    newCount(count + 1)
    // alert("Welcome to page")
  }
  let temp = '';
  if (pshow) {
    temp = <Card />
    // <>
    //   <p>Welcome to App</p>
    //   <button className='bg-[red] p-4' onClick={() => newShow(!pshow)}>Hide</button>
    // </>
  } else {
    temp = ''
    // <button className='bg-[red] p-4' onClick={() => newShow(!pshow)}>Show</button>
  }

  let addData = (a, b) => {
    console.log(a + b);
  }

  return (
    <div className="App">
      {temp}
      <img width={200} src={weblogo} alt='weblogo' />
      <button className='bg-[red] p-[10px] mr-4' onClick={() => addData(20, 25)}>Add Data</button>
      <button className='bg-[red] p-[10px] mr-4' onClick={displayData}>Save</button>
      {count}
      <Header />
      <h1 className='text-[40px] text-red-600 font-bold'>Welcome to Page</h1>
    </div>
  );
}

export default App;


let Card = () => {
  return (
    <h1>Welcome to page</h1>
  )
}