import React, { useState } from 'react'

export default function SearchBar(props) {
  const [input, setInput] = useState('')

  return (
    <form
      className='form mt-3'
      onSubmit={(e) => {
        e.preventDefault()
        props.onFormSubmit(input)
      }}
    >
      <div className='form-group input-group-lg'>
        <input
          type='text'
          className='form-control'
          placeholder='Search videos'
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>
    </form>
  )
}
