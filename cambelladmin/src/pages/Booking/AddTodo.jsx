import React, { useCallback, useId, useMemo, useReducer, useState } from 'react'
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
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { addNewTask } from "../../redux/Thunks/Booking";
import { OneBooking } from "../../redux/Slice/Booking";
import DatePicker from 'react-date-picker'
import {TodoReducer} from '../../function/Todohandle'








export default function AddTodo ({ date })
{
  // Default Set Variables
  const Dispatcher = useDispatch();
  const { bookcode } = useParams();
  const bookingForTodo = useSelector(state => OneBooking(state, bookcode));
  const [DefaultDate, setDefaultDate] = useState(new Date());
  const [varyingModal, setVaryingModal] = useState(false)

  const DisabledTodo = useMemo(() => date < new Date(), [date])
  const [task, setTask] = useReducer(TodoReducer, {bookid:bookcode,status:'pending'});

  //functions

  const onClickMOdel = () => setVaryingModal(!varyingModal);

  const onChangeInput = event => setTask({type:"CHANGEINPUT",payload:event})

  const OnChangeDate = value =>
  {
    setDefaultDate(value);

    setTask({ type: 'DATECHANGE', payload:DefaultDate });
  }


  const Disabled = useMemo(() => !task.task || DefaultDate < new Date(), [
    task,
    DefaultDate
  ])

  const AddTask = e => {
    e.preventDefault()
    console.log(task);
    try {
      Dispatcher(addNewTask(task));
        toast.success('Scussfully Added New Task')
        onClickMOdel()
    } catch (error)
    {
      toast.error('faileld to added!');
      console.error(error)
    }
  }

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
                          value={DefaultDate}
                          calendarIcon={
                            <MDBIcon
                              fas
                              icon='calendar-alt'
                              size='lg'
                              className='me-3'
                              color='primary'
                            />
                          }
                          onChange={value=>OnChangeDate(value)}
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
              <MDBBtn onClick={AddTask}>
                Add
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}
