// @ts-nocheck
import React, { useEffect } from "react";
import
  {
    MDBContainer,
    MDBRow, MDBBtn
  } from "mdb-react-ui-kit";
import Categorey from "../../component/category";
import { useServiceCategoryStore } from '../../redux/ServiceCategoryStore';
import FetchedError from '../Bugs/FetchedError';
import FetchedLoading from '../Bugs/FetchedLoading';
import { useAppContext } from '../../contexts/AppContext';

export default function Category ()
{
  const {ServiceCategories } = useServiceCategoryStore();
  const { loading, result, ServiceCats } = ServiceCategories;
  const { Appname } = useAppContext();

  return loading ? (<FetchedLoading />) : (
    <MDBContainer fluid className="my-5">
      <MDBRow className='adminshow-action'>
        <MDBBtn className='adminshow-action_add' as='a' href='/admins/add'>
          +
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
