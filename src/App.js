import { useState } from 'react'
import Table from './Table'
import Form from './Form'

const App = () => {
    const [characters, setCharacter] = useState([]);

    // Delete a character from the UI
    const removeCharacter = (index) => {
        setCharacter(characters.filter((character) => character.id !== index))
    }

    // Add a character to state
    const handleSubmit = (character) => {
        const id = Math.floor(Math.random() * 1000) + 1 // Generate a random number as ID
        const newCharacter = { id, ...character }

        setCharacter([...characters, newCharacter])
    }

    return (
        <div className='container' >
            <Table characterData={characters} removeCharacter={removeCharacter} />
            <Form handleSubmit={handleSubmit} />
        </div>
    );

}

export default App