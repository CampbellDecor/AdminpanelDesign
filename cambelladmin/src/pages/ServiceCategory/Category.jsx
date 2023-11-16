// @ts-nocheck
import React from "react";
import
  {
    MDBContainer,
    MDBRow, MDBBtn
  } from "mdb-react-ui-kit";
import Categorey from "../../component/category";
import FetchedError from '../Bugs/FetchedError';
import FetchedLoading from '../Bugs/FetchedLoading';
import { useAppContext } from '../../contexts/AppContext';
import { MdOutlinePlaylistAdd } from 'react-icons/md'

export default function Category ()
{
  const loading=false,result='fetched', ServiceCats = []
  const { Appname } = useAppContext();

  return loading ? (<FetchedLoading />) : (
    <MDBContainer fluid className="mt-1 my-5">
      <MDBRow className='adminshow-action'>
        <MDBBtn className='adminshow-action_add' as='a' href='/admins/add'>
          <MdOutlinePlaylistAdd  size={25}/>

        </MDBBtn>

        <h3>{Appname} Service Categories</h3>
      </MDBRow>

      <MDBRow>
        {
          result === "fetched" ? ServiceCats.map((servicecat, index) => (<Categorey {...servicecat} key={index} />)) : <FetchedError data='Service Category' />
        }

      </MDBRow>
    </MDBContainer>
  );
}
