import { useState } from 'react'
import { add } from './utils/utils'
import InputForm from './component/InputForm'
import Result from './component/Result'


function App() {
  const [input,setInput] = useState<string>('')
  const [result,setResult] = useState<number>()

  const onChange = (value:string) => {
    setInput(value)
  }

  const onClear = ()=>{
    setInput('')
    setResult(undefined)
  }
  const onSubmit=()=>{
    try {
      const sum = add(input);
      setResult(sum);
    } catch (error) {
      alert(error);
    }
  }
  
  return (
    <div className='flex flex-col mt-12 mx-auto w-2/3'>
     <h1 className='font-bold text-xl mx-auto w-2/3 bg-yellow-300 text-gray-600 p-2 rounded-md'>String TDD Assessment</h1>
     <InputForm input={input} onChange={onChange} onClear={onClear} onSubmit={onSubmit}/>
     <Result output={result}/>
    </div>
  )
}

export default App
