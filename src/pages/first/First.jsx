import './First.css';
import Sidebar from '../../components/sidebar/Sidebar';
import FirstPost from '../../components/firstPost/FirstPost';

export default function First() {
  return (
    <div className='first'>
        <FirstPost />
        <Sidebar />
    </div>
  )
};
