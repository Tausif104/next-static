import axios from 'axios'
import Link from 'next/link'

const Posts = ({ data }) => {
  const posts = data
  console.log(posts)
  return (
    <div>
      <Link href='/'>Go back</Link>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className='post-card'>
          <img src={post?.x_featured_media_original} alt={post.title.rendered} />
          <h2>{post.title.rendered}</h2>
        </div>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const { data } = await axios.get('https://creativepeoples.xyz/projects/wp-rest/wp-json/wp/v2/posts')
  return { props: { data } }
}

export default Posts
