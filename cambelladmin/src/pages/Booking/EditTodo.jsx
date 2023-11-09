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
import DatePicker from 'react-date-picker'
export default function EditTodo ({taskDoc,date}) {
  const DisabledTodo = useMemo(() => date < new Date(), [date])

  const [varyingModal, setVaryingModal] = useState(false)
  const [value, setValue] = useState(new Date())
  const [task, setTask] = useState(taskDoc)
  const onChangeInput = useCallback(
    event => {
      setTask(pre => ({ ...pre, [event?.target?.name]: event?.target?.value }))
    },
    [setTask]
  )
  const onClickMOdel = useCallback(() => setVaryingModal(!varyingModal), [
    varyingModal
  ])
  const Disabled = useMemo(() => !task.task || value < new Date() || taskDoc===task, [
    task,
    value,taskDoc
  ])

  const AddTask = useCallback(async (e) => {

    task.dueDate = value
    task.bookid = 'APedgnvVkSWJl3elTIz2'
    try {
      const add = await axios.post('/api/booking/todoTask', task)
      if (add.data) {
        toast.success('Scussfully Added New Task')
        onChangeInput()
      } else {
        toast.error('Failed to Add Task Try Again')
      }
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <>
      <MDBBtn onClick={onClickMOdel} color='link' rounded size='sm' disabled={DisabledTodo}>
        <MDBTooltip tag='a' wrapperProps={{ href: '#!' }} title='Edit todo'>
  <MDBIcon fas icon='pencil-alt' className='me-3' color='info' />
</MDBTooltip>

      </MDBBtn>
      <MDBModal show={varyingModal} setShow={setVaryingModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Edit Task</MDBModalTitle>
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
                                              value={task?.task}
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
                          value={task?.dueDate}
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
                                          value={task?.desc}
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
                Edit
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}
