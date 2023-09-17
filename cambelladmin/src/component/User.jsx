import { MDBBadge, MDBBtn } from "mdb-react-ui-kit";
import React from "react"
export function UserRows ( { username, profile, isBlock, isOnline, email, religion, uid, mobile } )
{
    return (
        <tr key={uid}>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src={profile}
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
              <p className='fw-bold mb-1'>{ username}</p>
              <p className='text-muted mb-0'>{email}</p>
              </div>
            </div>
          </td>
          <td>
          <p className='fw-normal mb-1'>{religion }</p>
          <p className='text-muted mb-0'>{ mobile}</p>
          </td>
        <td>{
          isBlock ? ( <MDBBadge color='danger' pill>
            Blocked/{isOnline?"Online":"Offline"}
          </MDBBadge> ) : ( <MDBBadge color='warning' pill>
              unBlocked/{isOnline?"Online":"Offline"}
            </MDBBadge>)
        }
          
          </td>
          <td>{Math.floor(Math.random()*20)}</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Edit
          </MDBBtn>
          {
            isBlock?(   <MDBBtn color='link' rounded size='sm'>
              UnBlock
          </MDBBtn>):(<MDBBtn color='link' rounded size='sm'>
            Block
          </MDBBtn>)
          }
         
          </td>
        </tr>
    )
  }