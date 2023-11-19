import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Col, Badge, Stack, Image } from 'react-bootstrap'

export function CountPanel ({ index, idenity, title, count, path }) {
  const navigate = useNavigate()
  return (
    <div
      className='d-flex  flex-md-row flex-column align-items-center justify-content-lg-around  shadow rounded mx-2 my-2 py-3 my-sm-0 py-sm-2 py-md-5 border-1 home-countpanel-componet'
      key={index}
      onClick={() => navigate(path)}
    >
      <div className='home-countpanel-componet--identiy'>{idenity}</div>
      <div className='home-countpanel-componet--des text-center'>
        <h5 className='fw-bolder'>{title}</h5>
        <h6>{count}</h6>
      </div>
    </div>
  )
}

export function ListPanel ({title,items }) {
  return (
    <Col md={5} className='my-3 mx-3 count-panel'>
      <h5>{title} Bookings</h5>
      <Stack gap={2}>
        {items.map(item => (
          <div className='d-flex justify-content-between count-panel-component border p-2 rounded rounded-2'>
            <div className='d-flex count-panel-component--name bg-image hover-zoom'>
              <Image
                className='count-panel-component--name--img'
                src={item.imgURL}
              />
              <h6 className='count-panel-component--name--text text-muted ms-2'>
                {item?.name}
              </h6>
            </div>
            <div>
              <Badge pill className='count-panel-component--count my-2'>
                {item?.count}
              </Badge>
            </div>
          </div>
        ))}
      </Stack>
    </Col>
  )
}
