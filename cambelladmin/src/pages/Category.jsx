// @ts-nocheck
import React, { useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import Categorey from "../component/category";
import {getServiceCat} from '../Slice/ServiceCategorySlice';
import {useDispatch,useSelector } from 'react-redux';
export default function Category ()
{
    const Dispatcher = useDispatch();
    const {ServiceCats,result } = useSelector( state => state.ServiceCat );
    useEffect( () =>
    {
        Dispatcher( getServiceCat() );
    }, [ Dispatcher ] );
  return (
    <MDBContainer fluid className="my-5">
      <MDBRow>
              {
                  result==="fetched" &&ServiceCats.map( (servicecat,index) => ( <Categorey {...servicecat} key={index}/>))
        }
      
      </MDBRow>
    </MDBContainer>
  );
}

