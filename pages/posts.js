import Link from 'next/link';

function Blog({ posts }) {  
  return (
    <ul>
      {posts.map((post, i ) => (
        <li key={post.id}>
          <Link as={`/posts/${post.id}`} href={'/posts/[id]'} passHref>
            <a>
              {post.title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Blog