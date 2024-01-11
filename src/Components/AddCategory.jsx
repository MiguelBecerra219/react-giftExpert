import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState('')
  const onInputChange = (event) => {
    setinputValue(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (inputValue.trim().length <= 1) return
    onNewCategory(inputValue.trim())
    setinputValue('')
  }

  return (
    <form onSubmit={onSubmit /* llamar la funcion de esta manera automaticamente pasa el evento como prop */} aria-label='form' >
      <input
        type="text"
        placeholder="Buscar gift"
        value={inputValue}
        onChange={onInputChange /* llamar la funcion de esta manera automaticamente pasa el evento como prop */}
      />
    </form>
  )
}

AddCategory.proptype = {
  onNewCategory: PropTypes.func.isRequired
}
