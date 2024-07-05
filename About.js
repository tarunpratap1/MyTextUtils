import React from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode === "dark"? "white": "black",
        backgroundColor: props.mode === "dark"? "#042743": "white"
    }

    return (

        <div className="container mt-5 " id='cont' style={myStyle} >
            <h1 style={myStyle}>About Us</h1>
            <p style={myStyle}><strong style={myStyle}>Text Utils</strong> is a ReactJs website built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting, and saving, but TextUtils offers much more than simple text drafting and formatting. TextUtils can convert your text to any case in just one simple click of a button. It can extract links and numbers safely from a labyrinth of random text or sophisticated documentation. It has an improved property of base64 encoding, reversal of your inputted text.You can even remove whitespaces from your scripted documents, and wear up your earphones to listen to it, instead of straining your eyes! It does a detailed analyzing of your text, and provides an output of words, and characters, along with reading time as well. The best part of TextUtils is that it is an open source project, as a result, dozens of new features are in the upcoming, which definitely makes it a cut above the rest.
            </p>
            <p style={myStyle}>The most eminent features of the website are as follows :</p>
            <div className="accordion mt-5" id="accordionExample" style={myStyle}>
                <div className="accordion-item" id='cont2' style={myStyle}>
                    <h2 className="accordion-header" style={myStyle}>
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" id='cont3' style={myStyle} >
                            <p>This <i>Text Util Website</i> Allows You To Analyze Your Text Freely By Many Functions Like Listen, Clear Text, Convert To UpperCase Etc.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" style={myStyle}>
                        <button className="accordion-button collapsed" id='cont4' style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free To Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" id='cont5' style={myStyle} >
                            <p>This Is Completly <i>Free To Use!!!</i>, Dosen't Require Credit Cards.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" style={myStyle}>
                        <button className="accordion-button collapsed" id='cont6' style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div style={myStyle} id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" id='cont7' style={myStyle} >
                            <p>This Works On Your Every Favourite <i>Browsers!</i>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
