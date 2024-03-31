import { useContext } from "react"
import { SearchContext } from "../../App"
import MeaningsDisplay from "./MeaningsDisplay"
import WordDisplay from "./WordDisplay"


function DefinitionDisplay() {
    const {definition} = useContext(SearchContext)
    const meanings = definition.meanings.map((meaning, index) => {
      return <MeaningsDisplay key={index} meaning={meaning}/>
    })
  return (
    <section>
      <WordDisplay word={definition.word} phonetic={definition.phonetic} audio = {definition.phonetics}/>
      {meanings}
    </section>
  )
}
export default DefinitionDisplay