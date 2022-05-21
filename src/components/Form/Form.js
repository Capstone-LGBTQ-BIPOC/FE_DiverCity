import React from 'react'
import { useContext, useState } from 'react'
import { LocationContext } from '../../context/LocationContext/LocationContext'

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
      {!location.selectedLocation && (
        <h2>You're currently searching in {location.location.city}</h2>
      )}
      {location.selectedLocation && (
        <h2>You're currently searching in {location.selectedLocation}</h2>
      )}
      <form>
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
        <button
          onClick={event => {
            event.preventDefault()
            location.setSelectedLocation('')
          }}
          className='curr-location-button'
        >
          Use Current Location
        </button>
      </form>
    </div>
  )
}
export default Form
