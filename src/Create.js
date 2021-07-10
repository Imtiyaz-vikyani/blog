import {useState} from "react";
import { useHistory } from "react-router-dom";
const  Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('imtiyaz')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog ={title, body, author}

        // console.log(blog);
        fetch(`http://localhost:8000/blogs`,{
            method:"post",
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(() =>{
            console.log("new block added");
            setIsPending(false);
            // history.go(-1);
            history.push('/')
        })

       
    }

    return (
        <div className="create">
           <h2>Add A new Blog</h2>
           <form onSubmit={handleSubmit}>
               <label>Blog title</label>
               <input type="text"  value={title} onChange ={(e) => setTitle(e.target.value)} required/>
               <label>Blog Body:</label>
               <textarea cols="20" rows="10" value={body} onChange={(e) => setBody(e.target.value)} required/>
               <label> Blog Author:</label>
               <select value={author} onChange={e => setAuthor(e.target.value)}>
               <option value="imtiyaz">Imtiyaz</option>
               <option value="ali">Ali</option>
               <option value="lucifer">Lucifer</option>
               <option value="Devil">Devil</option>
               <option value="god">God</option>
               <option value="joey">Joey</option>
               </select>
               { !isPending && <button>Submit</button>}
               { isPending && <button disabled>adding blog..</button>}
               <p>Title: {title}</p>
               <p>Body: {body}</p>
               <p>Author: {author}</p>

           </form>
        </div>
    );
}

export default Create;