import React, { useState } from 'react'

export const useMultiStepForm = (steps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const next = () => {
    setCurrentStepIndex(i => {
      return i + 1
    })
  }

  const back = () => {
    setCurrentStepIndex(i => {
      return i - 1
    })
  }

  const goTo = (number) => {
    setCurrentStepIndex(index)
  }
  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    next,
    back,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1
  }
}
