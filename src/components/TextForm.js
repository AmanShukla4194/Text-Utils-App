import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState(''); 
    // text is a variable whose default value here is "Enter text here"
    // setText is a method whic is used to change thge state(update) of the variable text
    // useState returns an array whose first parameter is text and second parameter is setText
    // text ="cguchkuchihc" wrong way to update the text in react;
    // setText("efvvevceve");

    const handleUpClick = ()=>{
        // console.log("UpperCase " + text);
        let uptext = text.toUpperCase();
        setText(uptext);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLoClick = ()=>{
        // console.log("UpperCase " + text);
        let lotext = text.toLowerCase();
        setText(lotext);
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleClearClick = ()=>{
        // console.log("UpperCase " + text);
        let newtext = ''
        setText(newtext);
        props.showAlert("Text Cleared", "success");
    }
    const handleOnChange = (event)=>{ // listening the event here
        // console.log("Change");
        setText(event.target.value); // then update the text after listening the event
    }
    const handleCopy = () => {
        // let text = document.getElementById("myBox");
        // text.select();
        // navigator.clipboard.writeText(text.value);
        // document.getSelection().removeAllRanges();
        // props.showAlert("Copied to clipboard", "success");
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
    }
    
    // Calculate word count only when text is not empty
    // const wordCount = text.trim() !== '' ? text.split(' ').length : 0;
    const wordCount = text.split(/\s+/).filter((element)=>{return element.length!==0})
    const placeholderClass = props.mode === 'dark' ? 'textarea-dark' : 'textarea-light';
   

    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}  >
            <h1>{props.heading}</h1>
            <div className="my-4" style={{border:'2px solid black'}}>
                <textarea className={`form-control ${placeholderClass}`} value={text} placeholder='Enter Text here' onChange={handleOnChange} id="myBox" rows="12" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'black'}}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
            <h2>Your text summary</h2>
            <span><b>{wordCount.length} words, {text.length} characters and </b></span>
            <span><b>{0.015*wordCount.length} Minutes to read</b></span>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}
