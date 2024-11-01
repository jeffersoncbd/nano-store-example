import { useState } from 'react'
import './App.css'
import { useStoreActions, useStoreSelects } from './store'

function App() {
  const action = useStoreActions()
  const pokemons = useStoreSelects((state) => state.pokemons)

  const [newPokemonName, setNewPokemonName] = useState('')

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault()
        action({ type: 'add-pokemon', payload: { newPokemonName } })
      }}>
        <label htmlFor="add-pokemon-input" style={{ display: 'block' }}>Adicionar pokemon:</label>
        <input
          id="add-pokemon-input"
          value={newPokemonName}
          onChange={(e) => setNewPokemonName(e.target.value)}
        />
      </form>
      <ul>
        {pokemons.map((pkm) => <li key={pkm}>{pkm}</li>)}
      </ul>
    </>
  )
}

export default App
