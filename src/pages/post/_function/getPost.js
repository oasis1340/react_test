// https://jsonplaceholder.typicode.com/post/id
const getPost = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await response.json();
    return post
  }
  
  export default getPost;