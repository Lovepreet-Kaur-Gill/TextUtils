import React, {useState} from 'react'
import Summary from './summary';
import TextToSpeech from "./TextToSpeech";
import Style from './button.css';
import TextReverse from './TextReverse';

// inside return, add:




export default function TextForm(props) {

    const handleCopy =()=>{
        console.log("i'm copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copied successfuly!","success")
    }

    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success")
    }
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success")

    };

    const handleClearText = () => {
        setText('');
        props.showAlert("Text cleared!","success")

    };
    const handleOnChange=(event)=>{
        // console.log("ON Change");
        setText(event.target.value);
    }
    const [text,setText]=useState('');
    // text="entter text"   wrong way to change the state 
    // correct way is 
    // setText("new text");
  return (
    <div style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <div className="d-flex flex-wrap my-2">
        <button className="btn btn-custom-primary btn-tall " onClick={handleUpClick}>Convert to UpperCase</button>     
        <button className="btn btn-custom-secondary btn-tall mx-3" onClick={handleLowerCase}>Convert to Lowercase</button>
        <button className="btn btn-custom-danger mx-1 btn-tall " onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-custom-primary btn-tall " onClick={handleCopy}>Copy Text</button>     
        
        
        <TextReverse text={text} setText={setText} />
        <TextToSpeech text={text} />
        <Summary text={text} />
        </div>
    </div>
  )
}
