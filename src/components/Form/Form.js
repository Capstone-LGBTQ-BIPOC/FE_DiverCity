import React from 'react'
import { useContext, useState } from 'react'
import { LocationContext } from '../../contexts/LocationContext'

const Form = () => {
  const location = useContext(LocationContext)

  const [typed, setTyped] = useState('')

  const [submittedLocation, setSubmittedLocation] = useState()

  const submitLocation = event => {
    event.preventDefault()
    location.setSelectedLocation(submittedLocation)
    clearInputs()
  }

  const clearInputs = () => {
    setTyped('')
  }

  return (
    <div>
      {location.selectedLocation && (
        <h2>You're currently searching in {location.selectedLocation}</h2>)}
      <div>
       <form/>
        <input
          type='text'
          placeholder='Enter a City'
          name='typed'
          value={typed}
          onChange={event => {
            setTyped(event.target.value)
            setSubmittedLocation(event.target.value)
          }}
        />
        <button
          onClick={submitLocation}
          disabled={!typed}
          className='submit-button'
        >
          SUBMIT
        </button>
      </form>
    </div>
  )
}
export default Form
