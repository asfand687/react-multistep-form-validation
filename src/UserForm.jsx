import React from 'react'
import FormWrapper from './FormWrapper'

const UserForm = ({ firstName, lastName, age, updateFields }) => {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={e => updateFields({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        value={lastName}
        required
        type="text"
        onChange={e => updateFields({ lastName: e.target.value })}
      />
      <label>Age</label>
      <input
        min={1}
        required
        type="number"
        value={age}
        onChange={e => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  )
}

export default UserForm