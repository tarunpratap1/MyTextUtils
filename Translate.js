import React, { useEffect } from "react";
import countries from "../data";
const Translate = (props) => {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#042743" : "white"
  }

  useEffect(() => {
    const fromText = document.querySelector(".from-text");
    const toText = document.querySelector(".to-text");
    // const exchageIcon = document.querySelector(".exchange");
    const selectTag = document.querySelectorAll(".select");
    const icons = document.querySelectorAll(".row i");
    const translateBtn = document.querySelector("#btntrans");
    selectTag.forEach((tag, id) => {
      for (let country_code in countries) {
        let selected =
          id === 0
            ? country_code === "en-GB"
              ? "selected"
              : ""
            : country_code === "hi-IN"
              ? "selected"
              : "";
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
      }
    });

    // exchageIcon.addEventListener("click", () => {
    //   console.log("helo");
    //   let tempText = fromText.value;
    //   let tempLang = selectTag[0].value;
    //   console.log(tempText);
    //   console.log(tempLang);
    //   fromText.value = toText.value;
    //   toText.value = tempText;
    //   selectTag[0].value = selectTag[1].value;
    //   selectTag[1].value = tempLang;
    // });

    fromText.addEventListener("keyup", () => {
      if (!fromText.value) {
        toText.value = "";
      }
    });

    translateBtn.addEventListener("click", () => {
      let text = fromText.value.trim();
      let translateFrom = selectTag[0].value;
      let translateTo = selectTag[1].value;
      if (!text) return;
      toText.setAttribute("placeholder", "Translating...");
      let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          toText.value = data.responseData.translatedText;
          data.matches.forEach((data) => {
            if (data.id === 0) {
              toText.value = data.translation;
            }
          });
          toText.setAttribute("placeholder", "Translation");
        });
    });

    icons.forEach((icon) => {
      icon.addEventListener("click", ({ target }) => {
        if (!fromText.value || !toText.value) return;
        if (target.classList.contains("fa-copy")) {
          if (target.id === "from") {
            navigator.clipboard.writeText(fromText.value);
          } else {
            navigator.clipboard.writeText(toText.value);
          }
        } else {
          let utterance;
          if (target.id === "from") {
            utterance = new SpeechSynthesisUtterance(fromText.value);
            utterance.lang = selectTag[0].value;
          } else {
            utterance = new SpeechSynthesisUtterance(toText.value);
            utterance.lang = selectTag[1].value;
          }
          speechSynthesis.speak(utterance);
        }
      });
    });
  }, []);
  return (
    <>
      <div className="container" id="cont" style={myStyle}>
        <h1 className="mb-5">MyTextUtils Translator</h1>
        <div className="wrapper" style={myStyle}>
          <div className="text-input" style={myStyle}>
            <textarea style={myStyle}
              spellCheck="false"
              className="from-text"
              placeholder="Enter text"
            ></textarea>
            <textarea style={myStyle}
              spellCheck="false"
              readOnly
              disabled
              className="to-text"
              placeholder="Translation"
            ></textarea>
          </div>
          <ul className="controls" style={myStyle}>
            <li className="row from" style={myStyle}>
              <select className="select" style={myStyle}></select>
              <div className="icons mt-3" style={myStyle}>
                <i style={myStyle} id="from" className="fas fa-volume-up"></i>
                <i style={myStyle} id="from" className="fas fa-copy"></i>
              </div>
            </li>
            <li className="row to" style={myStyle}>
              <select style={myStyle} className="select"></select>
              <div className="icons mt-3" style={myStyle}>
                <i style={myStyle} id="to" className="fas fa-volume-up"></i>
                <i style={myStyle} id="to" className="fas fa-copy"></i>
              </div>
            </li>
          </ul>
        </div>
        <button type="button" id="btntrans" className="btn btn-primary">Translate</button>
      </div>
    </>
  );
};

export default Translate;
