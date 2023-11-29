import React, { forwardRef } from 'react'
import { MDBCheckbox } from 'mdb-react-ui-kit'

export const Check = forwardRef((props, ref) => {
  return <MDBCheckbox {...props} ref={ref} />
})
