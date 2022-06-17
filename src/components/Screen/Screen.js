import React from 'react';
import classes from './Screen.module.css';

const Screen = (props) => {

  let textNum = props.num1+props.oper+props.num2;

  let ans = props.ans;

  let cond = textNum.length>5 || textNum.length===0;

  return (
    <div className={classes.screen} style={{fontSize: cond?'4rem':'7rem',
    height: cond?'15%':'25%'}} >
        {ans===''?textNum:ans}
    </div>
  )
}

export default Screen;
