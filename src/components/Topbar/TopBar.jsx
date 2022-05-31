import './TopBar.css';
import { Link } from 'react-router-dom';

export default function TopBar() {

  const user = false;

  return (
    <div className='topbar'>
        <div className='topLeft'>
          <i className='topIcon fa-brands fa-instagram'></i>
          <i className='topIcon fa-brands fa-twitter'></i>
          <i className='topIcon fa-brands fa-facebook'></i>
          <i classname='topIcon fa-brands fa-pinterest'></i>
        </div>
        <div className='topCenter'>
          <ul className='list'>
            <li className='listItem'>
              <Link className='link' to='/'>Home</Link>
            </li>
            <li className='listItem'>
              <Link className='link' to='/'>About</Link>
            </li>
            <li className='listItem'>
              <Link className='link' to='/'>Contact</Link>
            </li>
            <li className='listItem'>
            <Link className='link' to='/write'>Write</Link>
            </li>
            <li className='listItem'>
              {user && 'Logout'}
            </li>
          </ul>
        </div>
        <div className='topRight'>
          {
            user ? (
              
              <img
                className='topRightImg' 
                src='./images/menyc.png' 
                alt=''
              />
            
            ) : (
              <ul className='list'>
                <li className='listItem'>
                  <Link className='link' to='/login'>
                    Login
                  </Link>
                </li>
                <li className='listItem'>
                  <Link className='link' to='/register'>
                    Register
                  </Link>
                </li>
              </ul>  
            )
          }
          <i className='topSearchIcon fa-solid fa-magnifying-glass'></i>
        </div>
    </div>
  )
};
