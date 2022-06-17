import React, { useState } from 'react';
import classesBody from './Body.module.css';
import Screen from '../Screen/Screen'
import classesButton from '../Button/Button.module.css';
import classesChange from '../Button/ChangeButton.module.css';
import classesOperations from '../Button/Operations.module.css'



const Body = () => {

    const numKeys = [{id:'1'}, {id:'2'}, {id:'3'}, {id:'4'}, {id:'5'}, {id:'6'}, {id:'7'}, {id:'8'}, {id:'9'}, {id: '0'}, {id: '.'}];
    const changes = [{id: '1', text: 'A C'},{id: '2', text: 'C'} ]
    const operations = [{id: '1', text: '+'}, {id: '2', text: '-'}, {id: '3', text: 'x'}, {id: '4', text: '/'}]

    const [checkOp, setCheckOp] = useState('');
    const [clickedNum1, setClickedNum1] = useState('');
    const [clickedNum2, setClickedNum2] = useState('');

    const [ans, setAns] = useState('')

    const pushNumbers = (e) => {
        setAns('');
        if(checkOp==='') setClickedNum1(prev=>prev+e.target.value);
        else setClickedNum2(prev=>prev+e.target.value);        
    }
    const insertOperation = (e) => {
        if(ans==='') setCheckOp(e.target.value);
    }
    const erase = (e) => {
        const val = e.target.value;
        if(val==='A C'){
            setClickedNum1('');
            setClickedNum2('');
            setCheckOp('');
            setAns('');
        }
        else{
            if(ans!=='') setAns('');
            else if(clickedNum2!=='') setClickedNum2((prev)=>prev.slice(0,-1));
            else if(checkOp!=='') setCheckOp('');
            else if(clickedNum1!=='') setClickedNum1((prev)=>prev.slice(0, -1));
        }
    }
    const result = () => {
        setCheckOp('');
        let num1 = parseFloat(clickedNum1);
        let num2 = parseFloat(clickedNum2);
        if(checkOp==='+') setAns((num1+num2));
        if(checkOp==='-') setAns((num1-num2));
        if(checkOp==='x') setAns((num1*num2));
        if(checkOp==='/') setAns((num1/num2).toFixed(2));

        setClickedNum1('');
        setClickedNum2('');
        // setTimeout(()=>{
        //     setAns('');
        // }, 3000)
    }

    

    return (
        <div className={classesBody['main-body']}>
            <Screen num1={clickedNum1} oper={checkOp} num2={clickedNum2} ans={ans} />

            <div className={classesChange.change}>
                {changes.map((keys)=>(<button value={keys.text} key={keys.id} className={classesButton.button} onClick={erase}>{keys.text}</button>))}
            </div>

            <div className={classesBody.body}>
                {numKeys.map((keys)=>(<button value={keys.id} key={keys.id} className={classesButton.button} onClick={pushNumbers}>{keys.id}</button>))}
            </div>

            <div className={classesOperations.operations}>
                {operations.map((keys)=>(<button value={keys.text} key={keys.id} className={classesButton.button}
                onClick={insertOperation}>{keys.text}</button>))}
            </div>

            <div className={classesOperations.operations}>
                <button onClick={result} value='=' className={classesButton.button}>=</button>
            </div>
        </div>

    )
}

export default Body