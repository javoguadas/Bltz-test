import React, {useState}  from 'react';
export default function Button(props){
    const [buttonText, setButtonText] = useState(props.text);
    const changeText = (text) => {
        setButtonText(text);
        setTimeout(() => setButtonText("View Cart"), [2000]);
    }
    return (
        <button onClick={() => changeText("Loading")}>{buttonText}</button>
      
      )
}
