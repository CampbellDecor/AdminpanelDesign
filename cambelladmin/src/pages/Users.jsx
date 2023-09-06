import React,{ useState,useReducer} from 'react';
import { Container,Row,Form,Col} from 'react-bootstrap';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody,MDBInputGroup,MDBInput,MDBIcon} from 'mdb-react-ui-kit';
import {FaUserSlash,FaUserCheck} from "react-icons/fa";
import axios from "axios";

function UserRows ( { username, profile, isBlock, isOnline, email, religion, uid, mobile } ){
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
export default function Users ()
{
  const [searchText, setSearchText] = useState('');
  const userdata = {
   userEx: [
    {
      uid: 1212, username: "ThanuMahee",
      mobile: "+9477746327424", email: "fdsfsdfds", isOnline: false, isBlock: false,
      religion: "Hindu", profile: "https://static.thenounproject.com/png/363633-200.png"
    }, {
      uid: 1212, username: "ThanuMahee",
      mobile: "+9477746327424", email: "fdsfsdfds", isOnline: true, isBlock: false,
      religion: "Hindu", profile: "https://static.thenounproject.com/png/363633-200.png"
    },
    {
      uid: 1212, username: "Yuka",
      mobile: "+9477746327424", email: "fdsfsdfds", isOnline: true, isBlock: true,
      religion: "Hindu", profile: "https://static.thenounproject.com/png/363633-200.png"
    },
    {
      uid: 1212, username: "ThanuMahee",
      mobile: "+9477746327424", email: "fdsfsdfds", isOnline: true, isBlock: false,
      religion: "Hindu", profile: "https://static.thenounproject.com/png/363633-200.png"
    },
    {
      uid: 1212, username: "ThanuMahee",
      mobile: "+9477746327424", email: "fdsfsdfds", isOnline: true, isBlock: true,
      religion: "Hindu", profile: "https://static.thenounproject.com/png/363633-200.png"
    }
    ],
    showBlocked: false,
    showUnblocked: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_SHOW_BLOCKED':
        return {
          ...state,
          showBlocked: !state.showBlocked,
          showUnblocked: state.showBlocked ? state.showUnblocked : false,
        };
      case 'TOGGLE_SHOW_UNBLOCKED':
        return {
          ...state,
          showUnblocked: !state.showUnblocked,
          showBlocked: state.showUnblocked ? state.showBlocked : false,
        };
      default:
        return state;
    }
  };
  const [ user, dispatch ] = useReducer(reducer,userdata );
  const filteredUsers = user.userEx.filter( ( userp ) =>
  {
    const nameIncludesSearchText = userp.username.toLowerCase().includes(searchText.toLowerCase()) || userp.email.toLowerCase().includes(searchText.toLowerCase());
    if (user.showBlocked && !user.showUnblocked) {
      return userp.isBlock;
    } else if (!user.showBlocked && user.showUnblocked) {
      return !userp.isBlock;
    } else {
      return nameIncludesSearchText;
    }
  });

  const toggleShowBlocked = () => {
    dispatch({ type: 'TOGGLE_SHOW_BLOCKED' });
  };

  const toggleShowUnblocked = () => {
    dispatch({ type: 'TOGGLE_SHOW_UNBLOCKED' });
  };
  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };
    return(
    <Container className="position-relative vh-100">
        <Row >
            <Col lg={4}>
            <MDBInputGroup>
      <MDBInput label='Search'   onChange={handleSearchTextChange} />
      <MDBBtn rippleColor='dark'>
        <MDBIcon icon='search' />
      </MDBBtn>
    </MDBInputGroup>
            </Col>
            <Col lg={8} className="d-flex w-100 justify-content-end align-items-center">
      <span>
      <div>
          <Form.Check
            inline
                  label={ <FaUserCheck /> }
                  checked={user.showUnblocked}
                  onChange={toggleShowUnblocked}
     
          />
          <Form.Check
            inline
            label={<FaUserSlash/>}  checked={user.showBlocked}
            onChange={toggleShowBlocked}
           
          />
        </div>
      </span>
            </Col>
        </Row>
<MDBTable align='middle' >
      <MDBTableHead >
        <tr>
          <th scope='col'>User</th>
          <th scope='col'>Info</th>
          <th scope='col'>Status</th>
          <th scope='col'>Bookings</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
            {
              filteredUsers.map( userdataset => ( <UserRows {...userdataset} />))
        }
       
      </MDBTableBody>
    </MDBTable>
    </Container>

    )

}
