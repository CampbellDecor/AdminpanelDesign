import React, { useCallback, useMemo, useState } from 'react'
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
import { toast } from 'react-toastify'
import axios from 'axios'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import DatePicker from 'react-date-picker'
import {useBookingStore} from '../../redux/BookStore'
export default function AddTodo ({ date })
{
  const { OneBookingData } = useBookingStore();
  const { book} = OneBookingData;
  const DisabledTodo = useMemo(() => date < new Date(), [date])

  const [varyingModal, setVaryingModal] = useState(false)
  const [value, setValue] = useState(new Date())
  const [task, setTask] = useState({})
  const onChangeInput =event =>
    {
      console.log(task)
      setTask(pre => ({ ...pre, [event.target.name]: event.target.value }))
    }
  const onClickMOdel = useCallback(() => setVaryingModal(!varyingModal), [varyingModal])
  const Disabled = useMemo(() => !task.task || value < new Date(), [
    task,
    value
  ])

  const AddTask = useCallback(async e => {
    e.preventDefault()
    task.dueDate = value
    task.bookid = book?.bookid;
    try {
     const add = await axios.post('/api/booking/todoTask',task)
      if (add) {
        toast.success('Scussfully Added New Task')
        onClickMOdel()
      } else {
        toast.error('Failed to Add Task Try Again')
        onClickMOdel()
      }

    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <>
      <MDBBtn onClick={onClickMOdel} rounded size='sm' disabled={DisabledTodo}>

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
                        name='task'
                        onChange={onChangeInput}
                      />
                    </div>
                  )}
                </div>
                <div className='mb-3'>
                  {varyingModal && (
                    <div>
                      <MDBTooltip
                        tag='a'
                        wrapperProps={{ href: '#!' }}
                        title='Set due date'
                      >
                        <DatePicker
                          value={value}
                          calendarIcon={
                            <MDBIcon
                              fas
                              icon='calendar-alt'
                              size='lg'
                              className='me-3'
                              color='primary'
                            />
                          }
                          onChange={value => setValue(value)}
                          className='w-100 addtododatepicker'
                          clearIcon={false}
                        />
                      </MDBTooltip>
                    </div>
                  )}
                </div>

                <div className='mb-3'>
                  {varyingModal && (
                    <MDBTextArea
                      onChange={onChangeInput}
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
              <MDBBtn disabled={Disabled} onClick={AddTask}>
                Add
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}
