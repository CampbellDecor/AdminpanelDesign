import React, { forwardRef, useMemo } from 'react'
import { MDBValidationItem, MDBInput } from 'mdb-react-ui-kit'

//Normal Input field
export const Input= forwardRef(function(props,ref) {
  return useMemo(()=>(<MDBInput {...props} ref={ref}/>),[props,ref])
})
//Invalid Input
export const InValidationInput = forwardRef(function (props,ref) {
  const {
    feedback,
    invalidclassName,
    inputclassName,
    required = true,
    autoComplete = 'off',
    ...attr
  } = props

  return useMemo(()=> (
    <MDBValidationItem invalid feedback={feedback} className={invalidclassName}>
      <MDBInput
        className={inputclassName}
        {...attr}
        ref={ref}
        required={required}
        autoComplete={autoComplete}
      />
    </MDBValidationItem>
  ),[])
})

//Valid And Invalid Input
export const ValidAndInvalidInput = forwardRef(function (props,ref) {
  const {
    validfeedback,
    invalidfeedback,
    validclassName,
    inputclassName,
    invalidclassName,
    required = true,
    autoComplete = 'off',
    ...attr
  } = props
  return useMemo( ()=> (
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
  ),[])
})

//Valid Input
export const ValidationInput = forwardRef(function (props,ref) {
  const {
    feedback,
    validclassName,
    inputclassName,
    required = true,
    autoComplete = 'off',
    ...attr
  } = props
  return useMemo( ()=>(
    <MDBValidationItem valid feedback={feedback} className={validclassName}>
      <MDBInput
        className={inputclassName}
        {...attr}
        ref={ref}
        required={required}
        autoComplete={autoComplete}
      />
    </MDBValidationItem>
  ),[])
})
