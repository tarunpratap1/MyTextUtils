import React, { useState } from 'react'
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
// import "../i18n"
// import translate from 'google-translate-api';
// import { useTranslation } from 'react-i18next'
// const axios = require('axios').default;

import { useSpeechRecognition } from 'react-speech-recognition'
import SpeechRecognition from 'react-speech-recognition'
export default function TextForm(props) {
    // const { t } = useTranslation
    // const [translatedText, setTranslatedText] = useState("")
    const [text, setText] = useState("")
    const handleUpClick = () => {
        let doc = document.getElementById("myBox")
        let newdoc = doc.value
        setText(newdoc.toUpperCase())
    }



    // curl - X 'GET' \
    // 'https://libretranslate.com/languages' \
    // -H 'accept: application/json'
    const handleLoClick = () => {
        let doc1 = document.getElementById("myBox")
        let newdoc1 = doc1.value
        setText(newdoc1.toLowerCase())
    }

    const handleCopyClick = () => {
        var doc2 = document.getElementById("myBox")
        doc2.select()
        navigator.clipboard.writeText(text)
        document.getSelection().removeAllRanges()
    }

    const handleClearClick = () => {
        let newdoc = ""
        setText(newdoc)
    }

    const handleRemoveExtraClick = () => {
        let extraRemove = text.split(/[ ]+/)
        setText(extraRemove.join(" "))
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleListenClick = () => {
        const synth = window.speechSynthesis;
        let doc3 = document.getElementById("myBox")
        const text = doc3.value
        const utterThis = new SpeechSynthesisUtterance(text);
        synth.speak(utterThis);

    }

    // const handleHiClick = async () => {
    //     try {
    //         const { Text } = await translate(text, { to: 'hi' }); // 'hi' is the language code for Hindi
    //         setTranslatedText(Text);
    //     } catch (error) {
    //         console.error('Translation error:', error);
    //         var doc = document.getElementById("myBox")
    //         //   doc.value = translatedText
    //         // Handle translation errors
    //     }
    // };


        const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()
        const recognize = ()=>{SpeechRecognition.startListening({ continuous: true })}
        if (!browserSupportsSpeechRecognition) {
            return null
        }

        
    
        const handleWriteClick = ()=>{
            setText(transcript)
        }

        // handleWriteClick()
    // let doc3 = document.getElementById("myBox")
    // doc3.value = transcript
    
    // const handletransClick = ()=>{
        //     var doc = document.getElementById("myBox")
        //     var trac = doc.value
        //         tr
        // }\
        // SpeechRecognition.getRecognition('hello')
    return (
        <>
            <div className='container mt-5'>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" id='myBox' placeholder='Enter The Text To Analyze' value={text} style={{ backgroundColor: props.mode === "dark" ? "#042743" : "white" }} rows="8" onChange={handleOnChange}></textarea>

                    <button disabled={text.length === 0} className="btn btn-primary mt-2" onClick={handleUpClick}>
                        Convert To UpperCase
                    </button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 mt-2" onClick={handleLoClick}>
                        Convert To LowerCase
                    </button>
                    <button disabled={text.length === 0} className="btn btn-primary mt-2" onClick={handleClearClick}>
                        Clear Text
                    </button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 mt-2" onClick={handleCopyClick}>
                        Copy Text
                    </button>
                    <button disabled={text.length === 0} className="btn btn-primary mt-2" onClick={handleRemoveExtraClick}>
                        Remove Extra Spaces
                    </button>
                    <button disabled={text.length === 0} className="btn btn-primary mt-2 mx-2" onClick={handleListenClick}>
                        Listen Text
                    </button>
                    <button onClick={recognize} className='btn btn-primary mt-2' id='speakbtn'>Speak</button>
                    <button onClick={SpeechRecognition.stopListening} className='btn btn-primary mt-2 mx-2' id='stopbtn'>Stop</button>
                    <button onClick={handleWriteClick} className='btn btn-primary mt-2' id='writebtn'>Write</button>
                </div>
            </div>
            <div className="container mt-5">
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s/).filter((element) => { return element.length !== 0 }).length} Words And {text.length} Characters</p>
                <p>{0.008 * text.split(/\s/).filter((element) => { return element.length !== 0 }).length} Minutes To Read</p>
                <h2 className='mt-5'>Preview</h2>

                <p id='preview'>
                    {text.length + "\n" > 0 ? text : "Nothing To Preview Here!"}

                </p>
            </div>
        </>
    )
}


