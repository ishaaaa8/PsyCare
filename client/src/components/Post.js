
import './Post.css'
import { Link } from 'react-router-dom';
export default function Post({post}) {
  // console.log(post);
  const PF = "http://localhost:3000/images/"
  return (
    <div className='post'>
      {post.photo && <img className='postimg' src={post.photo} alt=''></img>}
      <div  className='postInfo'>
        <div className='postCats'>
          {
            post.categories.map((c) => (
              <span className='postcat'>{c.name}</span>
            ))
          }
        </div>
        <Link to={`/post/${post._id}`} className='link'>
           <span className='postTitle'>{post.title}</span>
        </Link>
        <hr/>
        <span className='postDate'>{new Date(post.createdAt).toDateString}</span>
        <p className='postDesc'>{post.desc}</p>
      </div>
    </div>
  )
}
