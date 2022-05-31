import './Header.css';

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitle">
                <span className='headerTitle1'>My</span>
                <span className='headerTitle2'>Fashion Blog</span>
            </div>
            <img 
                className='headerImage' 
                src='https://p2.piqsels.com/preview/515/683/730/garage-door-weathered-wall-urban-decay.jpg' 
                alt='' 
            />
        </div>
    )
};