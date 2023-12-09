import React, { useCallback, useReducer, useState } from 'react';
import
    {
        MDBBtn,
        MDBModal,
        MDBModalDialog,
        MDBModalContent,
        MDBModalHeader,
        MDBModalTitle,
        MDBModalBody,
        MDBModalFooter,
        MDBTextArea,
        MDBInput
    } from 'mdb-react-ui-kit';
import { RiUserForbidFill, RiUserFollowFill } from 'react-icons/ri';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaUserPen } from 'react-icons/fa6'
import { toast } from 'react-toastify';

const reducer = (state, action) =>
{
    switch (action.type)
    {
        case 'CHANGEINPUT': {
            return {
                ...state,
                [action.name]: action.value
            };
        }
        default:
            return state;
    }
};
export function BlockUnBlock ({ uid, username, isBlock })
{
    const [loading, setloading] = useState(false);


    const navigate = useNavigate();
    const [varyingModal, setVaryingModal] = useState(false);
    const [user, setUser] = useReducer(reducer, { uid });
    const onChangeMessage = useCallback(
        event =>
        {
            setUser({
                type: 'CHANGEINPUT',
                name: event.target.name,
                value: event.target.value
            });
        },
        [setUser]
    );
    const onClickMOdel = useCallback(() => setVaryingModal(!varyingModal), [
        varyingModal
    ]);
    const onBlock = useCallback(
        async e =>
        {
            setloading(true);
            try
            {
                const data = await axios.post('/api/user/block', user);
                setloading(false);
                if (data)
                {

                    onClickMOdel();

                }

            } catch (error)
            {
                setloading(false);
                console.error(error);
            }

        },
        [user, onClickMOdel]
    );
    const onunBlock = useCallback(
        async e =>
        {
            setloading(true);
            try
            {
                const data = await axios.post('/api/user/unblock', user);
                setloading(false);
                if (data)
                {


                    onClickMOdel();


                }

            } catch (error)
            {
                setloading(false);
                console.error(error);
            }

        },
        [user, onClickMOdel]
    );

    return (
        <>
            <MDBBtn onClick={onClickMOdel} color='link' rounded size='sm'>
                {!isBlock ? (
                    <RiUserForbidFill color='red' size={20} />
                ) : (
                    <RiUserFollowFill color='green' size={20} />
                )}
            </MDBBtn>
            <MDBModal show={varyingModal} setShow={setVaryingModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>
                                {isBlock ? 'Un Block ' : 'Block '}User
                            </MDBModalTitle>
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
                                        <MDBInput
                                            value={username}
                                            labelClass='col-form-label'
                                            label='User'
                                            readOnly
                                        />
                                    )}
                                </div>

                                <div className='mb-3'>
                                    {varyingModal && (
                                        <MDBTextArea
                                            onChange={onChangeMessage}
                                            labelClass='col-form-label'
                                            label={isBlock ? 'Note' : 'Reason'}
                                            name={isBlock ? 'note' : 'reason'}
                                            placeholder={
                                                isBlock
                                                    ? 'Contact via with us ...'
                                                    : 'Un Wanteted reason...'
                                            }
                                        />
                                    )}
                                </div>
                            </form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='danger' onClick={onClickMOdel}>
                                Close
                            </MDBBtn>
                            <MDBBtn
                                color={isBlock ? 'success' : 'warning'}
                                onClick={isBlock ? onunBlock : onBlock}
                                disabled={loading}
                            >
                                {loading ? (
                                    <Spinner
                                        as='span'
                                        animation='border'
                                        size='sm'
                                        role='status'
                                        aria-hidden='true'
                                    />
                                ) : isBlock ? (
                                    <RiUserFollowFill size={20} />
                                ) : (
                                    <RiUserForbidFill size={20} />
                                )}
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}

export function UserNotes ({ uid,username,note}) {
  const [loading, setloading] = useState(false)

  const navigate = useNavigate()
  const [varyingModal, setVaryingModal] = useState(false)
  const [user, setUser] = useReducer(reducer, { uid })
  const onChangeMessage = useCallback(
    event => {
      setUser({
        type: 'CHANGEINPUT',
        name: event.target.name,
        value: event.target.value
      })
    },
    [setUser]
  )
  const onClickMOdel = useCallback(() => setVaryingModal(!varyingModal), [
    varyingModal
  ])
  const onwriteNote = useCallback(
    async e => {
      setloading(true)
      try {
        const data = await axios.post('/api/user/usernote', user)
        setloading(false)
        if (data) {
          onClickMOdel()
        }
      } catch (error) {
          setloading(false);
          toast.error('Server Error!');
        console.error(error)
      }
    },
    [user, onClickMOdel]
  )


  return (
    <>
      <MDBBtn onClick={onClickMOdel} color='link' rounded size='sm'>
      <FaUserPen size={20} color='navy' />

      </MDBBtn>
      <MDBModal show={varyingModal} setShow={setVaryingModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>
                User Note
              </MDBModalTitle>
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
                    <MDBInput
                      value={username}
                      labelClass='col-form-label'
                      label='User'
                      readOnly
                    />
                  )}
                </div>

                <div className='mb-3'>
                  {varyingModal && (
                    <MDBTextArea
                      onChange={onChangeMessage}
                      labelClass='col-form-label'
                      label='Note'
                                          name='note'
                                          value={note}
                      placeholder='enter the notes...'
                    />
                  )}
                </div>
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='danger' onClick={onClickMOdel}>
                Close
              </MDBBtn>
              <MDBBtn
                color=''
                onClick={onwriteNote}
                disabled={loading}
              >
                {loading ? (
                  <Spinner
                    as='span'
                    animation='border'
                    size='sm'
                    role='status'
                    aria-hidden='true'
                  />
                ) : (
                  <FaUserPen size={20}/>

                )}
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}
