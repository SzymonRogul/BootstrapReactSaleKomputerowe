import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  

  return (
    <div className='container bg-light '>
      <div className='navbar d-flex flex-row align-items-center' >
        <p className='navbar-brand mt-3'>Rezerwacja sal</p>
        <nav className='navbar'>
          <ul className='navbar-nav d-flex flex-row gap-3'>
            <li className='nav-item'><a className='nav-link' href="">Strona główna</a></li>
            <li className='nav-item'><a className='nav-link' href="">Lista sal</a></li>
            <li className='nav-item'><a className='nav-link' href="">Dodaj rezerwację</a></li>
          </ul>
        </nav>
      </div>
      <hr />
      <div className='container'>
        <h3>Rezerwacja sal komputerowa</h3>
        <p>Wybierz salę i zarezerwuj stanowisko komputerowe</p>
      </div>
      <div className='container'>
          <h4>Dostępne sale</h4>
          <div className='row g-3  '>
            <div className=' card col-lg-4 col-md-6 col-sm-12 '>
              <div className='card-body'>
              <h4 className='card-title'>Sala 101</h4>
              <p className='card-text'>20 stanowisk</p>
              <p className='card-text  bg-success rounded-5 px-3 py-2 text-white border-success  '>Dostępna</p>
              <button className='btn btn-primary w-100'>Rezerwuj</button>
              </div>
            </div>
            <div className=' card col-lg-4 col-md-6 col-sm-12'>
              <div className='card-body'>
              <h4 className='card-title'>Sala 102</h4>
              <p className='card-text'>15 stanowisk</p>
              <p className='card-text  bg-success rounded-5 px-3 py-2 text-white  border-success '>Dostępna</p>
              <button className='btn btn-primary w-100'>Rezerwuj</button>
              </div>
            </div>
            <div className=' card col-lg-4 col-md-6 col-sm-12'>
              <div className='card-body'>
              <h4 className='card-title'>Sala 103</h4>
              <p className='card-text'>25 stanowisk</p>
              <p className='card-text  bg-danger rounded-5 px-3 py-2 text-white   '>Zajęta</p>
              <button className='btn disabled btn-dark w-100 border'>Niedostępna</button>
              </div>
            </div>
            
            <hr />
            </div>
            
          </div>
          <form>
              <h4>Dodaj rezerwację</h4>
              <div>
                <label className=' mt-3 form-label' htmlFor='name' >Imię i nazwisko</label>
                <br />
                <input id='name' className="form-control" type="text" placeholder='Jan Kowalski' />
              </div>
              <div>
                <label className=' mt-3 form-label' htmlFor='email' >Adres e-mail</label>
                <br />
                <input id='email' className="form-control"type="text" placeholder='jan@example.com' />
              </div>
              <div className='row'>
                <div className='col-sm-6'>
                  <label className=' mt-3 form-label htmlFor="sala' >Sala</label>
                  <br />
                  <input id='sala' className="form-control" type="text"  />
                </div>
                <div className='col-sm-6'> 
                  <label className='mt-3 form-label' htmlFor='data' >Data</label>
                  <br />
                  <input id='data' className="form-control" type="date" />
                </div>
              </div>
              <button className='btn btn-primary w-100 mt-3'>Dodaj rezerwację</button>
            </form>
            <hr />
          <div className='container'>
            <h4>Lista rezerwacji</h4>
            <div>
              <div className=' card  '>
              <div className='card-body'>
              <h4 className='card-title'>Jan Kowalski</h4>
              <div className='d-flex flex-row gap-3'>
                <p className='card-text'>jan@example.com</p>
                <p className='card-text'>01.12.2026</p>
                <p className='card-text'>Sala 103</p>
                <p className='card-text'>10:00</p>
                <p className='card-text'>2 godz.</p>
              </div>
              
              <button className='btn btn-primary w-100 mb-3'>Rezerwuj</button>
              <button className='btn btn-danger w-100'>Usuń</button>
              </div>
            </div>
            </div>
          </div>
          <hr />
          <h4>Tabela rezerwacji</h4>
          <table className='table table-bordered table-hover '>
            <thead>
              <th>Imię</th>
              <th>Nazwisko</th>
              <th>E-mail</th>
              <th>Sala</th>
              <th>Data</th>
              <th>Godzina</th>
              <th>Kiedy dodano</th>
            </thead>
            <tbody>
              <tr>
                <td>Jan</td>
                <td>Kowalski</td>
                <td>jan@example.com</td>
                <td>103</td>
                <td>01.12.2026</td>
                <td>10:00</td>
                <td>2 godz.</td>
              </tr>
              <tr>
                <td>Katarzyna</td>
                <td>Wiśniewska</td>
                <td>kasia@example.com</td>
                <td>101</td>
                <td>08.12.2026</td>
                <td>13:00</td>
                <td>1 godz.</td>
              </tr>
            </tbody>
          </table>
          <div className='container text-center w-100 bg-dark rounded-5 '>
            <p className='text-white p-2'>Rezerwacja sal © 2026</p>
          </div>


    </div>
  )
}

export default App
