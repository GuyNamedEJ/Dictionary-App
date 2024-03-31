function Meanings({ meaning }) {

  return (
    <div className="meaning-display">
      <div className="pos-container">
      <h3 className="part-of-speech">{meaning.partOfSpeech}</h3>
      <hr />
      </div>
      <div className="meanings">
        <p>Meaning</p>
        <ul>
        {meaning.definitions.map((definition,index) => {
        return <li key={index}>{definition.definition}</li>;
      })}
        </ul>
      
      </div>
     

      <p>Synonyms: {meaning.synonyms.length > 0 ? meaning.synonyms.join(" ") : "None"}</p>
    </div>
  );
}
export default Meanings;
