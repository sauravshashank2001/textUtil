import React, {useState} from 'react'




const TextForm = (props) => {
 
  const handleOnClickUpper=()=>{
    // console.log("uppercase bttn clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success");
  }

//  Handle lower case
  const handleOnClickLower=()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }

  //Handle copy

  const handleCopy = ()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }



  const handleOnChange=(event)=>{
    setText(event.target.value);
  }



  const [text,setText] = useState("");



  return (
    <>
    
    <div className='container'>
        <h1 style={{ color: props.mode==='light'?'black':'white'}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text}  onChange={handleOnChange} style={{ backgroundColor: props.mode==='dark'?'grey':'white'}} id="myBox" rows="8"></textarea>
        </div>  
        <button className="btn btn-primary mx-2" onClick={handleOnClickUpper}>convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleOnClickLower}>convert to Lowercase</button>
        <button className="btn btn-primary mx-2 " onClick={()=>setText("")} >Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
    </div>
    <div className="container my-3">
        <h1 style={{ color: props.mode==='light'?'black':'white'}}>Your text summary</h1>
        <p style={{ color: props.mode==='light'?'black':'white'}}> {text.split(" ").length} words and {text.length} characters</p>
        <p style={{color: props.mode==='light'?'black':'white'}}> {0.008 * text.split(" ").length} Minutes read </p>
        <h2 style={{ color: props.mode==='light'?'black':'white'}}>{text.length>0?text:"enter something to preview it here"}</h2>
    </div>
    </>
  )
}

export default TextForm
