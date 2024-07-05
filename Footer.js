import React from 'react'

export default function Footer(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#042743" : "white"
    }
  return (
    <div>
<div className="p-3 mb-0 bg-transparent text-body" style={{myStyle, textAlign: "center", height: "12vh", borderTop: props.mode === "dark" ? "2px solid white" : "2px solid black"}}><h4 style={myStyle}>Made By Tarun Pratap Singh</h4>
<p style={myStyle}>Follow Me On - <a href="https://youtube.com/@ttaruntech2073?si=jFbHXl2pr0rH81eU" style={{myStyle, textDecoration: "none",color: myStyle
}}>T2 Tarun Tech</a></p></div>
    </div>
  )
}
