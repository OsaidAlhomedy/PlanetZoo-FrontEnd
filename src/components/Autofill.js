import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { Hint } from 'react-autocomplete-hint';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Autofill() {
  const [hintData, setHintData] = useState([])
  const [text, setText] = useState('')

  const getData = async () => {

    const res = await axios.get('http://localhost:3010/company')
      var hintArray = []
       res.data[0].checkerData.map(a => hintArray.push(a))
        setHintData(hintArray)
        console.log(hintArray);

  }

  useEffect(()=> {
    getData()

  },[]);

  function condition() {

    if(hintData.includes(text)){
      return  <h1>hello</h1> ;
    }else {
        console.log('false');

    }

  }

  return (
    <div className="App">
      <h5>Enter your company's name</h5>
      {/* <code>{`[${hintData.toString()}]`}</code> */}
      <br/>

     <Hint options={hintData} allowTabFill>
    <input className='input-with-hint'
    name="khaled"
        value={text}
        onChange={e => setText(e.target.value)} 
        />
      </Hint>
      <Button onClick={condition} variant="info">Submit  </Button>

    </div>
  );
}

export default Autofill;