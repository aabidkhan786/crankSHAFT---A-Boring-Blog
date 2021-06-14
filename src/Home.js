import React from 'react';
import BlogList from "./BlogList";
import blog from './BlogData';



const Home = () => {

    return ( 
        <>
            <div className="blog-content">
                <BlogList blog = {blog}/>
                {/* <BlogList blog = {blog.filter((blog) => blog.author === "Mohammad Aamir")} /> */}
            </div>
        </>
     );
}
 
export default Home;