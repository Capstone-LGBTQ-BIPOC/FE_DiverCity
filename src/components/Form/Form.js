import React from 'react'
import { useContext, useState } from 'react'
import { LocationContext } from '../../context/LocationContext/LocationContext'

const Form = () => {
  const location = useContext(LocationContext)

  const [typed, setTyped] = useState('')

  const submitLocation = event => {
    event.preventDefault()
    clearInputs()
  }

  const clearInputs = () => {
    setTyped('')
  }

  return (
    <div>
      {!location.selectedLocation && (
        <h2>Youre currently searching in {location.location.city}</h2>
      )}
      {location.selectedLocation && (
        <h2>Youre currently searching in {location.selectedLocation}</h2>
      )}
      <form>
        <input
          type='text'
          placeholder='Enter a City'
          name='typed'
          value={typed}
          onChange={event => {
            location.setSelectedLocation(event.target.value)
            setTyped(event.target.value)
          }}
        />

        <button
          onClick={submitLocation}
          disabled={!location.selectedLocation}
          className='submit-button'
        >
          SUBMIT
        </button>
        <button
          onClick={event => {
            event.preventDefault()
            location.setSelectedLocation('')
          }}
        >
          Use Current Location
        </button>
      </form>
    </div>
  )
}
export default Form
