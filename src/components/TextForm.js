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
        const emo = { 'a': '๐', 'b': '๐', 'c': '๐', 'd': '๐คฃ', 'e': 'โค๏ธ', 'f': '๐', 'g': '๐ข', 'h': '๐', 'i': '๐', 'j': '๐', 'k': '๐', 'l': '๐คจ', 'm': '๐', 'n': '๐', 'o': '๐ด', 'p': '๐ฅฐ', 'q': '๐', 'r': '๐', 's': '๐ค', 't': '๐ฅฑ', 'u': '๐', 'v': '๐ฏ', 'w': '๐ซค', 'x': '๐', 'y': '๐', 'z': '๐ฅบ' }

        let ntxt = text.toLowerCase().replace(/[abcdefghijklmnopqrstuvwxyz]/g, m => emo[m]);
        setText(ntxt);
        props.setAlertMessage("Text Encrypted!");

    }

    const handleEmoDecrypt = () => {
        const emoDec = { '๐': 'a', '๐': 'b', '๐': 'c', '๐คฃ': 'd', 'โค๏ธ': 'e', '๐': 'f', '๐ข': 'g', '๐': 'h', '๐': 'i', '๐': 'j', '๐': 'k', '๐คจ': 'l', '๐': 'm', '๐': 'n', '๐ด': 'o', '๐ฅฐ': 'p', '๐': 'q', '๐': 'r', '๐ค': 's', '๐ฅฑ': 't', '๐': 'u', '๐ฏ': 'v', '๐ซค': 'w', '๐': 'x', '๐': 'y', '๐ฅบ': 'z' }

        setText(text.toLowerCase().replaceAll('๐', m => emoDec[m]).replaceAll('๐', m => emoDec[m]).replaceAll('๐', m => emoDec[m]).replaceAll('๐คฃ', m => emoDec[m]).replaceAll('โค๏ธ', m => emoDec[m]).replaceAll('๐', m => emoDec[m]).replaceAll('๐ข', m => emoDec[m]).replaceAll('๐', m => emoDec[m]).replaceAll('๐', m => emoDec[m]).replaceAll('๐', m => emoDec[m]).replaceAll('๐', m => emoDec[m]).replaceAll('๐คจ', m => emoDec[m]).replaceAll('๐', m => emoDec[m]).replaceAll('๐', m => emoDec[m]).replaceAll('๐ด', m => emoDec[m]).replaceAll('๐ฅฐ', m => emoDec[m]).replaceAll('๐', m => emoDec[m]).replaceAll('๐', m => emoDec[m]).replaceAll('๐ค', m => emoDec[m]).replaceAll('๐ฅฑ', m => emoDec[m]).replaceAll('๐', m => emoDec[m]).replaceAll('๐ฏ', m => emoDec[m]).replaceAll('๐ซค', m => emoDec[m]).replaceAll('๐', m => emoDec[m]).replaceAll('๐', m => emoDec[m]).replaceAll('๐ฅบ', m => emoDec[m]));

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
