import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useMultiStepForm } from './useMultiStepForm'
import UserForm from './UserForm'
import AccountForm from './AccountForm'
import AddressForm from './AddressForm'

function App() {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, next, back } = useMultiStepForm([
    <UserForm/>,
    <AddressForm/>,
    <AccountForm/>
  ])
  const onSubmit = (e) => {
    e.preventDefault()
    next()
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
          {currentStepIndex !== 0 && <button type="button" onClick={back}>Back</button>}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  )
}

export default App
