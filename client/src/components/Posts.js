
import './Posts.css'
import Post from './Post.js'
export default function Posts({posts}) {
  return (
    <div className='posts'>
      {
        posts.map( post => (
          <Post post={post}/>
        ))
      }
    </div>
  )
}
