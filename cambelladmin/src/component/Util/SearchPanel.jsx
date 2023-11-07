import React, { useCallback, useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import {
  InputGroup,
  Form
} from 'react-bootstrap'

export default function SearchOption () {
    const [search, setsearch] = useState();
    const onSearchChange = useCallback(e =>
    {
        setsearch(e.target.value);
  },[setsearch])
  return (
    <InputGroup className='input-group chat-users_search rounded mb-3 shadow py-2'>
      <Form.Control
        rounded
        type='search'
        placeholder='Search...'
        className='chat-users_search--input border-0'
        list='adminchatlist'
        onChange={onSearchChange}
      />
      <datalist id='adminchatlist'>
        <option value={3}></option>
      </datalist>
      <InputGroup.Text className='border-0 chat-users_search--btn py-3 px-1'>
        <BiSearchAlt className='chat-users_search--btn__icon' />
      </InputGroup.Text>
    </InputGroup>
  )
}
