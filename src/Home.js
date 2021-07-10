import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFatch from "./useFatch";


const Home = () =>{
  
   const { data, isPending, error} = useFatch('http://localhost:8000/blogs')
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs)
    // }    
   
    return (
        <div className="home">
         {error && <div>{ error }</div>}
         {isPending && <h2>Loding...</h2>}
         {data && <BlogList blogs={data}  title="All Blogs!"/>}       {/*here we used porps*/}
         {/* <BlogList blogs={blogs.filter((blog) => (blog.author === "Imtiyaz")) }  title="imtiyaz's Blogs!" handleDelete ={handleDelete}/>     */}
        </div>
    )
}

export default Home;