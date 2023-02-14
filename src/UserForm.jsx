import React from 'react'
import FormWrapper from './FormWrapper'

const UserForm = () => {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input autoFocus required type="text"/>
      <label>Last Name</label>
      <input required type="text" />
      <label>Age</label>
      <input min={1} required type="number" />
    </FormWrapper>
  )
}

export default UserForm