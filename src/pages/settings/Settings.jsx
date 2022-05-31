import './Settings.css';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Settings() {
  return (
    <div className='settings'>
        <div className='settingsWrapper'>
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your account</span>
                <span className='settingsDeleteTitle'>Delete your account</span>
            </div>
            <form className='settingsForm'>
                <label>Profile Picture</label>
                <div className='settingsPicture'>
                    <img 
                        src='https://i.ytimg.com/vi/JhWTM9of1IE/maxresdefault.jpg'
                        alt=''
                    />
                    <label htmlFor='fileInput'>
                        <i className="settingsProfileIcon fa-solid fa-user"></i>
                    </label>
                    <input type='file' id='fileInput' style={{ display:'none' }} />
                </div>
                <label>Username</label>
                    <input type='text' placeholder='username' />
                <label>Email Address</label>
                    <input type='email' placeholder='ex: your@emailaddress.com' />
                <label>Password</label>
                    <input type='password' />
                <button className='settingsSubmit'>Update</button>
            </form>   
        </div>
        <Sidebar />
    </div>
  )
};
