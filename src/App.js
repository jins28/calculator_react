import  React,{useState} from 'react'
import './App.css';
import Button from './Button';

function App() {
  const[result,setResult] = useState('');
  
  return (
    <div className="container">
      <form>
        <input className='current-operand output' type={'text'} value={result} />
      </form>
      <div className='buttons'>
       
      
      <Button result={result} setResult={setResult}/>
      
      </div>
    </div>
  );
}

export default App;
