import { useHistory, useParams } from "react-router-dom";
import useFatch from "./useFatch";

const BlogDetails = () =>  {
    const {id} = useParams()
   const { data, isPending, error} = useFatch(`http://localhost:8000/blogs/${id}`)
    const history = useHistory();
   const handleClick = () => {
      fetch(`http://localhost:8000/blogs/${data.id}`,{
          method:"delete"
      }).then(() =>{
          history.push("/")
      })
    }  
    return (
        <div className="blog-details">
           {isPending && <div>Loding....</div>}
           {error && <div>{error}</div>}
           {data && (
               <article>
                    <h2>{data.title}</h2>
                    <p>Wrriten by {data.author}</p>
                    <div>{data.body}</div>
                    <button onClick={handleClick}>Delete Blog</button>
               </article>
           )}
        </div>
    )
}


export default BlogDetails;