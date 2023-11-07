import React, { useCallback, useState } from 'react'
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBTextArea,
  MDBInput,
  MDBTooltip,
  MDBIcon
} from 'mdb-react-ui-kit'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
export default function AddTodo () {
  const [varyingModal, setVaryingModal] = useState(false)

  const onChangeMessage = useCallback(event => {}, [])
  const onClickMOdel = useCallback(() => setVaryingModal(!varyingModal), [
    varyingModal
  ])
  const onBlock = useCallback(async e => {}, [])

  return (
    <>
      <MDBBtn onClick={onClickMOdel} rounded size='sm'>
        <AiOutlineAppstoreAdd size={24} />
      </MDBBtn>
      <MDBModal show={varyingModal} setShow={setVaryingModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Add New Task</MDBModalTitle>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={onClickMOdel}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form>
                <div className='mb-3'>
                  {varyingModal && (
                    <div>
                      <MDBInput
                        labelClass='col-form-label'
                        label='Task'
                        required
                      />


                      <MDBTooltip
                        tag='a'
                        wrapperProps={{ href: '#!' }}
                        title='Set due date'
                      >

                        <MDBIcon
                          fas
                          icon='calendar-alt'
                          size='lg'
                          className='me-3'
                          for='birthdaytime'
                        />
                      </MDBTooltip>

                    </div>
                  )}
                </div>

                <div className='mb-3'>
                  {varyingModal && (
                    <MDBTextArea
                      onChange={onChangeMessage}
                      labelClass='col-form-label'
                      label='Description'
                      name='desc'
                      placeholder='Description...'
                    />
                  )}
                </div>
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='danger' onClick={onClickMOdel}>
                Close
              </MDBBtn>
              <MDBBtn>Add</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}
