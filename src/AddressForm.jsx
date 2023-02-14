import React from 'react'
import FormWrapper from './FormWrapper'

const AddressForm = ({ street, city, state, zip, updateFields }) => {
  return (
    <FormWrapper title="Address">
      <label>Street</label>
      <input value={street} onChange={e => updateFields({ street: e.target.value })} autoFocus required type="text" />
      <label>City</label>
      <input value={city} onChange={e => updateFields({ city: e.target.value })} required type="text" />
      <label>State</label>
      <input value={state} onChange={e => updateFields({ state: e.target.value })} required type="text" />
      <label>Zip</label>
      <input value={zip} onChange={e => updateFields({ zip: e.target.value })} required type="text" />
    </FormWrapper>
  )
}

export default AddressForm