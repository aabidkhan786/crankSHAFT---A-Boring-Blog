const BlogList = (props) => {
    
    const blog = props.blog;

    return ( 
        <>
            {blog.map((blogs)=>(
                    <div className="single_blog">
                        <img src={blogs.image} alt="reliance" />
                        <p>{blogs.title}</p>
                        <p>Credit : {blogs.author}</p>
                    </div>
                ))}
        </>
     );
}
 
export default BlogList;