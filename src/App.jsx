import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useMultiStepForm } from './useMultiStepForm'
import UserForm from './UserForm'
import AccountForm from './AccountForm'
import AddressForm from './AddressForm'

const INITIAL_DATA = {
  firstName: '',
  lastName: '',
  age: '',
  strett: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: ''
}

function App() {
  const [data, setData] = useState(INITIAL_DATA)
  const updateFields = (fields) => {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, next, back } = useMultiStepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />
  ])
  const onSubmit = (e) => {
    e.preventDefault()
    if (!isLastStep) next()
    console.log(data)
  }
  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        width: "500px"
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem"}}>
          { currentStepIndex + 1} / { steps.length }
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end"
          }}  
        >
          {!isFirstStep && <button type="button" onClick={back}>Back</button>}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  )
}

export default App
