import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='item'>
            <span className="title">ABOUT ME</span>
            <img src='./images/me2.jpg' alt='' />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione et repudiandae non totam doloremque modi, consectetur ea labore perspiciatis amet vel esse libero minus laboriosam voluptates velit aspernatur quia commodi?</p>
        </div>
        <div className='item'>
            <span className='title'>CATEGORIES</span>
            <ul className='list'>
                <li className='listItem'>Current Favorite Brands</li>
                <li className='listItem'>Daily Fashion Tips</li>
                <li className='listItem'>What I'm Wearing</li>
                <li className='listItem'>Upcoming Drops</li>
            </ul>
        </div>
        <div className='item'>
            <span className='title'>FOLLOW ME</span>
            <div className='socialMedia'>
                <i className='sidebarIcon fa-brands fa-instagram'></i>
                <i className='sidebarIcon fa-brands fa-twitter'></i>
                <i className='sidebarIcon fa-brands fa-facebook'></i>
                <i classname='sidebarIcon
                 fa-brands fa-pinterest'></i>
            </div>
        </div>
    </div>
  )
};
