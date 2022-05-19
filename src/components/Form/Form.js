import React from 'react'
import { useContext } from 'react'
import { LocationContext } from '../../context/LocationContext/LocationContext'

const Form = (props) => {
  const location = useContext(LocationContext)
  
  const submitLocation = event => {
    event.preventDefault()
    clearInputs()
  }

  const clearInputs = () => {
    location.setSelectedLocation('')
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Prompt'
        name='selectedLocation'
        value={location.selectedLocation}
        onChange={event => {
          location.setSelectedLocation(event.target.value)
        }}
        required
      />

      <button
        onClick={submitLocation}
        disabled={!location.selectedLocation}
        className='submit-button'
      >
        SUBMIT
      </button>
    </form>
  )
}
 export default Form