import { Link } from 'react-router-dom'
import { FaHome} from 'react-icons/fa'
import {  FaGear } from 'react-icons/fa6'
import { Container } from 'react-bootstrap';
import logo from './test.png'
export default function Test () {
  return (
    <div className='vh-100'>
      <NavBar />
      <Container className='w-50 pb-5'>
        <form>
  <div className="form-group mt-2 mb-2 py-2">
    <label for="exampleInputEmail1">Tracking_Number</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>

<div className='form-group mt-2 mb-2 py-2' >
  <label for='exampleInputEmail1'>NODE</label>
  <input
    type='email'
    className='form-control'
    id='exampleInputEmail1'
    aria-describedby='emailHelp'
  />
</div>
<div className='form-group mt-2 mb-2 py-2'>
  <label for='exampleInputEmail1'>LMSP</label>
  <input
    type='email'
    className='form-control'
    id='exampleInputEmail1'
    aria-describedby='emailHelp'
  />
</div>
<div className='form-group mt-2 mb-2 py-2'>
  <label for='exampleInputEmail1'>NEW_NODE</label>
  <input
    type='email'
    className='form-control'
    id='exampleInputEmail1'
    aria-describedby='emailHelp'
  />
</div>
<div className='form-group mt-2 mb-2 py-2'>
  <label for='exampleInputEmail1'>NEW_LSMP</label>
  <input
    type='email'
    className='form-control'
    id='exampleInputEmail1'
    aria-describedby='emailHelp'
  />
</div>
<div className='form-group mt-2 mb-2 py-2'>
  <label for='exampleInputEmail1'>BATCH_NUMBER</label>
  <input
    type='email'
    className='form-control'
    id='exampleInputEmail1'
    aria-describedby='emailHelp'
  />
</div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
      </Container>
      <Footer />
    </div>
  )
}
function NavBar () {
  return (
    <nav className='navbar navbar-expand-md navbar-light '
      style={{ backgroundColor:'#390603' }}>
      <div className='container w-50 mx-auto'>
        <div className='navbar-text d-flex justify-content-center'>
          <Link className='navbar-brand d-flex text-white align-items-center fw-bold' to='#'>
            <img src={logo} alt='Logo' width='50px' height='30px' className='me-2 img-rounded img-fluid' rounded  />
            DMAPP
          </Link>
        </div>
        <ul className='navbar-nav ms-auto flex-row'>
          <li className='nav-item mx-1'>
            <Link className='nav-link' to='#'>
              <FaHome color='#fff' size={20} />
            </Link>
          </li>
          <li className='nav-item mx-1'>
            <Link className='nav-link' to='#'>
              <FaGear  color='#fff' size={20}/>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
function Footer () {
  return (
    <footer class='bg-dark py-3 text-white fw-bold'>
      <div class='container'>
        <div class='row'>
          <div class='col-6 col-md text-start'>
            <Link to='#' class='text-decoration-none text-white fw-bold'>
              Tracking_Number
            </Link>
          </div>
          <div class='col-md-5 d-flex justify-content-center'>
            <Link to='#' class='mx-3 text-decoration-none text-white fw-bold'>
              NODE
            </Link>
            <Link to='#' class='mx-3 text-decoration-none text-white fw-bold'>
              LMSP
            </Link>
            <Link to='#' class='mx-3 text-decoration-none text-white fw-bold'>
              NEW_NODE
            </Link>
            <Link to='#' class='mx-3 text-decoration-none text-white fw-bold'>
              NEW_LMSP
            </Link>
            <Link to='#' class='mx-3 text-decoration-none text-white fw-bold'>
              BATCH_NUMBER
            </Link>
          </div>
          <div class='col-6 col-md text-end'>
            <Link to='#' class='text-decoration-none text-white fw-bold'>
              Options
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
