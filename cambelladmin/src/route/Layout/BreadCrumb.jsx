import React, { useCallback, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBContainer
} from 'mdb-react-ui-kit'
import { useAppContext } from '../../contexts/AppContext'

export default function BreadCrumb () {
  const location = useLocation()
  const pathname = useMemo(() => location.pathname.substring(1), [location])
  const { Appname } = useAppContext()
  const title = useMemo(() => {
    const name = pathname.substring(0, pathname.indexOf('/'))
    return Appname + '  ' + name.charAt(0).toUpperCase() + name.substring(1)
  }, [pathname, Appname])
  const pathnameElement = useCallback((length, index, ele) => {
    if (length === index + 1) {
      if (ele === 'add') return 'Add'
      else {
        if (ele === 'edit/') {
          return 'Edit'
        } else {
          return ''
        }
      }
    } else {
      return ele
    }
  }, [])


  const urlset = useMemo(() => {
    let pathbase = '/'

    const pathset = pathname.split('/')
    return pathset.map((ele, index) => {
      pathbase += ele + '/'
      return {
        name: pathnameElement(pathset.length, index, ele),
        path: pathbase,
        active: pathbase.length === index + 1
      }
    })
  }, [pathname,pathnameElement])

  return useMemo(
    () => (
      <div className='px-5 py-2 bg-light mb-4'>
        <h2 className='pagename'>{title} </h2>
        <MDBContainer fluid>
          <MDBBreadcrumb bold>
            {urlset?.map(ele => (
              <MDBBreadcrumbItem>
                <Link
                  to={ele.path}
                  className='text-black text-capitalize text-decoration-none'
                >
                  {ele?.name}
                </Link>
              </MDBBreadcrumbItem>
            ))}
          </MDBBreadcrumb>
        </MDBContainer>
      </div>
    ),
    [title,urlset]
  )
}
