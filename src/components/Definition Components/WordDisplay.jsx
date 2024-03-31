import { useState } from "react"

function WordDisplay({word, phonetic, phonetics}) {

  return (
    <div className="word-display">
        <h1 className="word">{word}</h1>
        <h3 className="phonetic">{phonetic}</h3>
    </div>
  )
}
export default WordDisplay