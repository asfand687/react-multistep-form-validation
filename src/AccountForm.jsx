import React from 'react'
import FormWrapper from './FormWrapper'

const AccountForm = ({ email, password, updateFields }) => {
  return (
    <FormWrapper title="Account Creation">
      <label>Email</label>
      <input value={email} onChange={e => updateFields({ email: e.target.value })} autoFocus required type="email" />
      <label>Password</label>
      <input value={password} onChange={e => updateFields({ password: e.target.value })} required type="password" />
    </FormWrapper>
  )
}

export default AccountForm