import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import {useLocation, useNavigate} from "react-router-dom";

const Content = () => {
  let { state } = useLocation();
  const navigate = useNavigate();
  const maxWords = 20
  const [status, setStatus] = useState("initial")
  const [words, setWords] = useState([]);
  const [wordId, setWordId] = useState(0);
  const [inputWord, setInputWord] = useState("");

  function randomInteger(min, max, arrayNumbers) {
    let rand = Math.floor(0 + Math.random() * (max - min));

    if(arrayNumbers.indexOf(rand) != -1) {
      return randomInteger(min, max, arrayNumbers);
    }else{
      return rand;
    }
  }

  const started = () => {
    setStatus("started")

    let arrayWords = []
    let arrayNumbers = []

    for(let i = 0; i < maxWords; i++){
      let rand = randomInteger(0, state.content.length, arrayNumbers);

      arrayWords.push(state.content[rand]);
      arrayNumbers.push(rand);
    }

    setWords(() => arrayWords)
  }

  const check = () => {
    if(words[wordId].translate === inputWord){
      if(wordId !== maxWords - 1){
        setWordId((prev) => prev + 1);
        setInputWord("")
      }else{
        alert("Вы прошли тест!")
        navigate("/verbatim")
      }
    }
  }

  return (
  <div className="app">
    <Header/>
    <div className="content container flex">
      {status ===
      "initial" ?
        <div className="content-inner flex">
          <h2 className="content__title">{state.title} <span>({state.lvl})</span></h2>
          <button className="content__btn" onClick={() => started()}>Начать</button>
        </div>:
      status ===
      "started" ?
        <div className="content-inner flex">
          <h2 className="content__title">{words[wordId].word}</h2>
          <input className="content__input" type="text" placeholder="Перевод" value={inputWord} onChange={(e) => setInputWord(e.target.value)} />
          <button className="content__btn" onClick={() => check()}>Проверить</button>
        </div> :
        <span>finish</span>}
    </div>
  </div>
  );
};

export default Content;
