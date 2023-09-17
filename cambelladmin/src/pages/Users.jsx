import React, {
  useState
  , useReducer,
  //useContext
} from 'react';
import {
   Container,
  Row,
  Form,
  Col,Pagination} from 'react-bootstrap';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody,MDBInputGroup,MDBInput,MDBIcon} from 'mdb-react-ui-kit';
import { FaUserSlash, FaUserCheck } from "react-icons/fa";
import { RiUserAddFill } from "react-icons/ri";
import {UserRows} from "../component/User";
//import {CambellContext} from '../contexts/AppContext';



export default function Users ()
{
  const [ searchText, setSearchText ] = useState( '' );
  // const {islogin} = useContext( CambellContext );



  const userdata = {
    userEx:
    [
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
            <Col>
            <MDBInputGroup>
      <MDBInput label='Search'   onChange={handleSearchTextChange} className='w-75' />
      <MDBBtn rippleColor='dark'>
        <MDBIcon icon='search' />
      </MDBBtn>
    </MDBInputGroup>
            </Col>
            <Col className="d-flex w-100 justify-content-end align-items-center">
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
          <Col>
          <RiUserAddFill/>
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
          <MDBTableBody>
            <tr>
              <td colSpan={ 5 }>
                <div className='w-100 d-flex justify-content-center align-items-center'>
              <Pagination className='p-2'>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>1</Pagination.Item>
              <Pagination.Item>1</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>9</Pagination.Item>
              <Pagination.Item>10</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
                  </Pagination>
                  </div>
              </td>
           
            </tr>
          
          </MDBTableBody>
         
    </MDBTable>
    </Container>

    )

}
