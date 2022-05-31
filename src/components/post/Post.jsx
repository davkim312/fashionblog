import './Post.css';

export default function Post() {
  return (
    <div className='post'>
        <img
            className='image' 
            src='https://cdn.shopify.com/s/files/1/0302/7829/articles/BLOG_IMAGEE_e32fe1fc93_7142e042-b5ef-4b09-ade2-11d1e54004de_1200x1600.jpg?v=1645111426'
            alt=''
        />
        <div className='postInfo'>
            <div className='categories'>
                <span className='category'>Current Favorite Brands</span>
            </div>
            <span className='postTitle'>Lorem ipsum dolor, sit amet</span>
            <hr />
        </div>
        <span className='postDate'>8 hours ago</span>
        <p className='postDescription'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod inventore rem porro. Dignissimos vel repellendus libero quisquam quam numquam provident quae ipsum explicabo error, harum, aliquam molestiae fugiat dolore sit!
        </p>
    </div>
  )
};
