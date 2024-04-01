import { useContext, useState, createRef } from "react"
import { SearchContext, ThemeContext } from "../App"

function Search() {

    const [word, setWord] = useState(localStorage.getItem("Definition") || "keyboard")

    const {setSearchTerm } = useContext(SearchContext)
    const {theme} = useContext(ThemeContext)

    let inputRef = createRef()
    
    function handleSubmit(event) {
        event.preventDefault()
        setSearchTerm(word)
        inputRef.current.blur()
        
    }

    function handleChange(event) {
        setWord(event.target.value)
    }

  return (
    <form onSubmit={handleSubmit} action="">
        <input placeholder="Search for a word" ref={inputRef} className={`searchbar text-${theme.font}`} onChange={handleChange} type="text" value={word} />
    </form>
  )
}
export default Search