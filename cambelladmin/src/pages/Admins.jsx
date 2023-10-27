import React, { useEffect } from 'react'
import { Container, Row} from 'react-bootstrap'
import Admin from '../component/Admin';
import { getadmin } from '../Slice/AdminSlice'
import { useDispatch, useSelector } from 'react-redux'
import FetchedError from './Bugs/FetchedError';
import FetchedLoading from './Bugs/FetchedLoading'
export default function Admins ()
{
  const { admins, result, loading } = useSelector(state => state.admin);
  const dispatcher = useDispatch();
  useEffect(() =>
  {
    dispatcher(getadmin());
  }, [dispatcher]);
  return (<Container className='vh-100'>
    {loading?(<FetchedLoading/>):(<Row>
      {result === 'fetched'
        ? admins.map((admindata,index) =>
          <Admin key={index} {...admindata
} />
        )
        : (<FetchedError data='Admins' />)}
    </Row>)}
  </Container>
  );
}
