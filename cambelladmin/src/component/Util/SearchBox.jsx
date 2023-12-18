import React, { useCallback, useMemo, useState } from 'react'

import {
  Form,
  FormControl,
  Button
} from 'react-bootstrap'
import { useSelector } from 'react-redux';
import {AllUser} from '../../redux/Slice/User'
import {allEvents} from '../../redux/Slice/Events'
import {allPacks} from '../../redux/Slice/Packages'
import {allService} from '../../redux/Slice/Service'
import { useNavigate } from 'react-router-dom';

export default function SearchBox ()
{
  const navigate=useNavigate()
  const [search, searchtext] = useState('')
  const Users = useSelector(AllUser);
  const Event = useSelector(allEvents);
  const Packages = useSelector(allPacks);
  const Service = useSelector(allService);
  const Hints = [];
  Users.forEach(ele =>
  {

    const uid = '/user/profile/' + ele.uid;
    Hints.push({ path: uid, value: ele.username})
    Hints.push({ path: uid, value: ele.email })
    Hints.push({ path: uid, value: ele.mobile })
    Hints.push({ path: uid, value: ele.address })
    Hints.push({ path: uid, value: ele.uid })

  })
  Event.forEach(ele =>
  {
    const eventCode = '/event?search=' + ele.eventid
    Hints.push({ path: eventCode, value: ele.name });
    Hints.push({ path: eventCode, value: ele.eventid});

  })
  Service.forEach(ele =>
  {
    const serviceid = '/service?search=' + ele.servicecode;
    Hints.push({ path: serviceid, value: ele.serviceName });
    ele.subservice.forEach(e =>
    {
      const subservice = '/service?subservice=' + e.serid;
      Hints.push({ path: subservice, value: e.sername });
    })
  })
  Packages.forEach(ele =>
  {
    const packageId = '/pack?search=' + ele.packageId;
    Hints.push({ path: packageId, value: ele.packageName });
    Hints.push({ path: packageId, value: ele.packageID });
    ele.services.forEach(e =>
    {
      Hints.push({ path: packageId, value: e });

    })
  })
    const onchange = useCallback(e=>
    {
      searchtext(e.target.value);
    }, []);
  const searchHandle =()=>{try {
    navigate(search);
  } catch (error) {
    console.error(error);
  }

  };

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
      <datalist style={{backgroundColor:" #b07a78"}}  id='searchlist'>
        {Hints.map(ele => (<option value={ele.path} >{ele.value}</option>))}
      </datalist>

  <Button variant='secondary' className='btn' onClick={searchHandle}>
    <i className='fas fa-search text-dark fw-bolder'></i>
  </Button>
</Form>

  )
}
