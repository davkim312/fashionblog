import './Write.css';

export default function Write() {
  return (
    <div className='write'>
        <img
          className='writeImage' 
          src='https://i.ytimg.com/vi/JhWTM9of1IE/maxresdefault.jpg' 
          alt='' 
        />
        <form className='writeForm'>
            <div className="formGroup">
                <label htmlFor='fileInput'>
                  <i className="fileIcon fa-solid fa-plus"></i>
                </label>
                <input 
                  type='file' 
                  id='fileInput' 
                  style={{display:'none'}} 
                />
              <input 
                type='text' 
                placeholder='Title' 
                className='writeInput' 
                autoFocus={true} 
              />
            </div>
            <div className='formGroup'>
                <textarea 
                  placeholder='Leave a Comment' 
                  type='text' 
                  className='writeInput writeText'>
                </textarea>
                <button className='writeSubmit'>Post Comment</button>
            </div>
        </form>
    </div>
  )
};
