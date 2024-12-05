import { useState } from 'react'
import LabeledInputField from './component/LabeledInputField'
import { add } from './utils/utils'

function App() {
  const [input,setInput] = useState<string>('')
  const [result,setResult] = useState<number>()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    setInput(value)
  }

  const onClear = ()=>{
    setInput('')
    setResult(0)
  }
  const onClick=()=>{
    add(input)
  }
  
  return (
    <>
     <LabeledInputField label="Input" name="input" value={input} onChange={onChange}/>
     <button onClick={onClick}>Calculate</button>
     <button onClick={onClear}>Clear</button>
     {result && <div>{result}</div>}
    </>
  )
}

export default App
