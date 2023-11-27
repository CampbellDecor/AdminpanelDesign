import React, { forwardRef } from 'react'
import { MDBValidationItem, MDBInput } from 'mdb-react-ui-kit'

//V=Invalid Input
export const InValidationInput = forwardRef(function ({
  feedback,
  invalidclassName,
  inputclassName,
  attr,
  required = true,
  autoComplete = 'off',
  ref
}) {
  return (
    <MDBValidationItem invalid feedback={feedback} className={invalidclassName}>
      <MDBInput
        className={inputclassName}
        {...attr}
        ref={ref}
        required={required}
        autoComplete={autoComplete}
      />
    </MDBValidationItem>
  )
})

//Valid And Invalid Input
export const ValidAndInvalidInput = forwardRef(function ({
  validfeedback,
  invalidfeedback,
  validclassName,
  inputclassName,
  invalidclassName,
  attr,
  required = true,
  autoComplete = 'off',

  ref
}) {
  return (
    <MDBValidationItem
      valid
      className={validclassName}
      feedback={validfeedback}
    >
      <MDBValidationItem
        invalid
        feedback={invalidfeedback}
        className={invalidclassName}
      >
        <MDBInput
          className={inputclassName}
          {...attr}
          ref={ref}
          required={required}
          autoComplete={autoComplete}
        />
      </MDBValidationItem>
    </MDBValidationItem>
  )
})

//Valid Input
export const ValidationInput = forwardRef(function ({
  feedback,
  validclassName,
  inputclassName,
  attr,
  required = true,
  autoComplete = 'off',
  ref
}) {
  return (
    <MDBValidationItem valid feedback={feedback} className={validclassName}>
      <MDBInput
        className={inputclassName}
        {...attr}
        ref={ref}
        required={required}
        autoComplete={autoComplete}
      />
    </MDBValidationItem>
  )
})
