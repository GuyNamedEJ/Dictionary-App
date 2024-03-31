import { useContext, useState } from "react"
import { SearchContext, ThemeContext } from "../App"

function Search() {

    const [word, setWord] = useState("keyboard")

    const {setSearchTerm } = useContext(SearchContext)
    const {theme} = useContext(ThemeContext)
    
    function handleSubmit(event) {
        event.preventDefault()
        setSearchTerm(word)
    }

    function handleChange(event) {
        setWord(event.target.value)
    }

  return (
    <form onSubmit={handleSubmit} action="">
        <input className={`searchbar text-${theme.font}`} onChange={handleChange} type="text" value={word} />
    </form>
  )
}
export default Search