import React, { useState } from 'react'
export default function TextForm(props){ 

const [text, setText] = useState("" ) ; // usestate help us to make a new state 
 //text = "new text" ;  [wrong way to change the state ]

//  setText("new text") ; // correct way to change the state


//now text is a state and to update a state we cant write text=blah we have to make a function if we want to update a state 
const handleupClick= () =>{
    console.log("Uppercase was clicked"+text)
    let newText =  text.toUpperCase();
    setText(newText); //this will get updated withpout my site getting reload but this wont be the  case with any normal functions cus react dont watch all the functionns bt default settext that why wev using thius

}
const handlelowClick= () =>{
    console.log("Uppercase was clicked"+text)
    let newText =  text.toLowerCase();
    setText(newText);} //this will get updated withpout my site getting reload but this wont be the  case with any normal functions cus react dont watch all the functionns bt default settext that why wev using thius

const handleonChange= (event) =>{  //fx me free ka listener object bhui mil gyaa
    console.log("on change")
    setText(event.target.value); //now we canenter our text
}
const clear =()=> {
    setText("");
}
// const copy= () => {
//     document.execCommand('copy')
// }
    return ( 
        <>
<div>
  <h1>{props.heading}</h1>
  <div className="mb-3">
    {/* /* <label for="my box" class="form-label">Example textarea</label>  */}
    <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="8"></textarea>
    </div> 
    <button className="btn btn-primary   mx-1 my-2" onClick={handleupClick}>convert to upper case</button>
    <button className="btn btn-primary  mx-2 my-2" onClick={handlelowClick}>convert to lower case</button>
    <button className="btn btn-primary mx-2 my-2" onClick={clear}>Clear Textbox</button>
    {/* <button className="btn btn-primary mx-2" onClick={copy}>Save to Clipboard</button> */}
    
</div>

 <div className='container mytext my-3'>
     <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 *text.split(" ").length}Minute read </p>
        <h2>Preview</h2>
        <p>{text}</p>
 </div>
</>    )
}