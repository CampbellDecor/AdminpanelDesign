import React, { useCallback, useState } from 'react'

import {
  Form,
  FormControl,
  Button
} from 'react-bootstrap'
import { useLocation } from 'react-router-dom';

export default function SearchBox ()
{

    const location = useLocation();
    const [search, searchtext] = useState('');
    const onchange = useCallback(e=>
    {
      searchtext(e.target.value);
    }, []);
  const searchHandle = useCallback(() =>
  {try {

  } catch (error) {
    console.error(error);
  }

  }, []);

  return (
    <Form className='d-none d-md-flex input-group w-auto my-auto searchbar'>
  <FormControl
        type='search'
        as='input'
    placeholder='Search..'
    style={{ minWidth: '225px' }}
              autoComplete='off'
        onChange={onchange}
        list='searchlist'
      />
      <datalist id='searchlist'>
        <option value={'ttt'} />
        <option value={'uuu'} />
      </datalist>

  <Button variant='secondary' className='btn' onClick={searchHandle}>
    <i className='fas fa-search text-dark fw-bolder'></i>
  </Button>
</Form>

  )
}
