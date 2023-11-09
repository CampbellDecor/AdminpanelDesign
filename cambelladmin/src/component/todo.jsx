import
  {
    MDBListGroup,
    MDBListGroupItem,
    MDBCheckbox,
    MDBTooltip,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
import React, { useCallback, useMemo, useState } from 'react';
import { Collapse } from 'react-bootstrap';
import EditTodo from '../pages/Booking/EditTodo';
import Swal from 'sweetalert2';
import axios from 'axios';
import { toast } from 'react-toastify';
export default function Todo ({
  task,
  dueDate,
  taskid,
  desc,
  createDate,
  status = 'pending',
  bookid,
  todoList = true
})
{
  const tasklist = {
    task: 'Hi',
    dueDate: new Date(),
    desc: 'ghghghg',
    status
  };
  const [open, isopen] = useState(false);
  const toggle = useCallback(() => isopen(!open), [isopen, open]);
  const valid = useMemo(() =>
  {
    if (status === 'completed') return 1;
    else return status === 'pending' && dueDate > new Date() ? 0 : -1;
  }, [status, dueDate]);
  const [statuschange, setstatuschange] = useState(valid > 0);
  const onChangeStatus = useCallback(() =>
  {
    setstatuschange(!statuschange);
  }, [statuschange, setstatuschange]);
  const onDelete = async () =>
  {
    const val = await Swal.fire({
      title: 'Delete',
      text: 'Do you want to Delete This Task',
      icon: 'error',
      confirmButtonText: 'ok',
      confirmButtonColor: '#19b604',
      cancelButtonColor: '#f60909',
      showCancelButton: true
    });
    if (val.value)
    {
      try
      {
        const del = await axios.delete('/api/booking/todoTask', {
          data: {
            taskid,
            bookid
          }
        });
        toast.success('Successfully Deleted!');
      } catch (error)
      {
        toast.error('Failed To Delete Task!');
        console.error(error);
      }
    }
  };
  return (
    <>
      <MDBListGroup
        horizontal
        className='rounded-0 bg-transparent'
        onClick={toggle}
        onMouseEnter={toggle}
      >
        <MDBListGroupItem className='d-flex align-items-center ps-0 pe-3  rounded-0 border-0 bg-transparent'>
          <MDBCheckbox
            name='flexCheck'
            checked={statuschange}
            onChange={onChangeStatus}
            id='flexCheck'
            disabled={!todoList}
            aria-checked='mixed'
          />
        </MDBListGroupItem>
        <MDBListGroupItem className='px-3  d-flex align-items-center flex-grow-1 border-0 bg-transparent'>
          <p className='lead fw-normal mb-0'>Renew car insurance</p>
        </MDBListGroupItem>
        <MDBListGroupItem className='px-3  d-flex align-items-center border-0 bg-transparent'>
          <div
            className={`py-1 px-2 me-2 border ${valid > 0
                ? 'border-success'
                : valid === 0
                  ? 'border-warning'
                  : 'border-danger'
              } rounded-3 d-flex align-items-center bg-light`}
          >
            <p className='small mb-0'>
              <MDBTooltip
                tag='a'
                wrapperProps={{ href: '#!' }}
                title='Due on date'
              >
                {valid > 0 && (
                  <MDBIcon icon='hourglass' color='success' className='me-2' />
                )}
                {valid === 0 && (
                  <MDBIcon
                    fas
                    icon='hourglass-half'
                    color='warning'
                    className='me-2'
                  />
                )}
                {valid < 0 && (
                  <MDBIcon
                    icon='calendar-times'
                    color='danger'
                    className='me-2'
                  />
                )}
              </MDBTooltip>
              28th Jun 2020
            </p>
          </div>
        </MDBListGroupItem>
        <MDBListGroupItem className='ps-3 pe-0  rounded-0 border-0 bg-transparent'>
          <div className='d-flex flex-row justify-content-end mb-1'>
            <EditTodo taskDoc={tasklist} />
            <MDBBtn color='link' onClick={onDelete}>
              <MDBTooltip
                tag='a'
                wrapperProps={{ href: '#!' }}
                title='Delete todo'
              >
                <MDBIcon fas icon='trash-alt' color='danger' />
              </MDBTooltip>
            </MDBBtn>
          </div>
          <div className='text-end text-muted'>
            <MDBTooltip
              tag='a'
              wrapperProps={{ href: '#!' }}
              title='Created date'
            >
              <p className='small text-muted mb-0'>
                <MDBIcon fas icon='info-circle' className='me-2' />
                28th Jun 2020
              </p>
            </MDBTooltip>
          </div>
        </MDBListGroupItem>
      </MDBListGroup>
      {desc && (
        <Collapse in={open}>
          <div id='example-collapse-text'>
            {desc}
            <hr />
          </div>
        </Collapse>
      )}
    </>
  );
}
