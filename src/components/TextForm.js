import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');


    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.setAlertMessage("Converted to Uppercase!");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.setAlertMessage("Converted to Lowercase!");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.setAlertMessage("Text Cleared!");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.setAlertMessage("Copied to clipboard!");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.setAlertMessage("Extra spaces removed!");
    }


    const handleEmo = () => {
        const emo = { 'a': '😂', 'b': '😊', 'c': '😒', 'd': '🤣', 'e': '❤️', 'f': '😁', 'g': '😢', 'h': '😉', 'i': '😎', 'j': '😄', 'k': '😙', 'l': '🤨', 'm': '😆', 'n': '🙂', 'o': '😴', 'p': '🥰', 'q': '😘', 'r': '😍', 's': '🖤', 't': '🥱', 'u': '😋', 'v': '😯', 'w': '🫤', 'x': '😏', 'y': '😞', 'z': '🥺' }

        let ntxt = text.toLowerCase().replace(/[abcdefghijklmnopqrstuvwxyz]/g, m => emo[m]);
        setText(ntxt);
        props.setAlertMessage("Text Encrypted!");

    }

    const handleEmoDecrypt = () => {
        const emoDec = { '😂': 'a', '😊': 'b', '😒': 'c', '🤣': 'd', '❤️': 'e', '😁': 'f', '😢': 'g', '😉': 'h', '😎': 'i', '😄': 'j', '😙': 'k', '🤨': 'l', '😆': 'm', '🙂': 'n', '😴': 'o', '🥰': 'p', '😘': 'q', '😍': 'r', '🖤': 's', '🥱': 't', '😋': 'u', '😯': 'v', '🫤': 'w', '😏': 'x', '😞': 'y', '🥺': 'z' }

        setText(text.toLowerCase().replaceAll('😂', m => emoDec[m]).replaceAll('😊', m => emoDec[m]).replaceAll('😒', m => emoDec[m]).replaceAll('🤣', m => emoDec[m]).replaceAll('❤️', m => emoDec[m]).replaceAll('😁', m => emoDec[m]).replaceAll('😢', m => emoDec[m]).replaceAll('😉', m => emoDec[m]).replaceAll('😎', m => emoDec[m]).replaceAll('😄', m => emoDec[m]).replaceAll('😙', m => emoDec[m]).replaceAll('🤨', m => emoDec[m]).replaceAll('😆', m => emoDec[m]).replaceAll('🙂', m => emoDec[m]).replaceAll('😴', m => emoDec[m]).replaceAll('🥰', m => emoDec[m]).replaceAll('😘', m => emoDec[m]).replaceAll('😍', m => emoDec[m]).replaceAll('🖤', m => emoDec[m]).replaceAll('🥱', m => emoDec[m]).replaceAll('😋', m => emoDec[m]).replaceAll('😯', m => emoDec[m]).replaceAll('🫤', m => emoDec[m]).replaceAll('😏', m => emoDec[m]).replaceAll('😞', m => emoDec[m]).replaceAll('🥺', m => emoDec[m]));

        props.setAlertMessage("Text Decrypted!");
    }

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-4" style={{marginTop: '3rem'}}>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="12" style={{ background: props.mode === 'light' ? 'white' : '#545454', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleEmo}>Encrypt Text</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleEmoDecrypt}>Decrypt Text</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleUpClick}>Covert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleLoClick}>Covert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleClearClick}>Clear</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleCopy}>Copy To Clipboard</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3">
                <h4>Your Text Summary:</h4>
                <p>{text.split(/\s+/).filter((elm) => { return elm.length !== 0 }).length} words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").filter((elm) => { return elm.length !== 0 }).length} minutes to read.</p>
                <h5>Preview</h5>
                <p>{text.length > 0 ? text : 'Enter text above to preview it here.'}</p>
            </div>
        </>
    )
}
