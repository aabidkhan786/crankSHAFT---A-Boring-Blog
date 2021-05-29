import React, {useState} from 'react';
import IMG1 from "./IMG1.jpg";
import IMG4 from "./IMG2.png";
import IMG5 from "./IMG3.png";


const Home = () => {

    const [blog, setBlog] = useState([
        {image: IMG1, title:'CrudeOil Chart', author:'Mohammad Aabid', id: 1},
        {image: IMG1, title:'CrudeOil Chart', author:'Mohammad Aabid', id: 2},
        {image: IMG4, title:'CrudeOil Chart', author:'Mohammad Aabid', id: 3},
        {image: IMG5, title:'CrudeOil Chart', author:'Mohammad Aabid', id: 4},
    ]);

    return ( 
        <div className="blog-content">
            {blog.map((blogs)=>(
                <div key={blogs.id} className="single_blog">
                    <img src={blogs.image} alt="reliance" />
                    <p>{blogs.title}</p>
                    <p>Written by: {blogs.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;