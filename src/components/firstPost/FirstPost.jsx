import './FirstPost.css';

export default function FirstPost() {
  return (
    <div className='firstPost'>
        <div className='firstPostWrapper'>
            <img 
                src='https://i.ytimg.com/vi/JhWTM9of1IE/maxresdefault.jpg'
                alt=''
                className='firstPostImage' 
            />
            <h1 className='firstPostTitle'>Lorem ipsum dolor sit amet
                <div className='firstPostEdit'>
                    <i class="firstPostIcon fa-solid fa-pen-to-square"></i>
                    <i class="firstPostIcon fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className='firstPostInfo'>
                <span className='firstPostDate'>8 hours ago</span>
            </div>
            <p className='firstPostDescription'>
                The brand 'Aime Leon Dore' has to be my favorite brand right now. The founder/designer, Teddy Santis, mixes minimalism with elegance on his clothing. There is no arguing that this is one of the hottest brands out right now and its only growing with popularity.
            </p>
        </div>
    </div>
  )
};
