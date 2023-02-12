import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:3000/blogs');

    // const [name, setName] = useState('mario');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id); // create a new array and store the blogs except for the one we want to delete
    //     setBlogs(newBlogs); // use setBlogs to update blogs value with new array
    // }

    return(
        <div className="home">
            {error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
            
            {/* evaluate first if blogs has content */}
            {blogs && <BlogList blogs={ blogs } title='All Blogs'/>}

            {/* <BlogList blogs={ blogs } title='All Blogs' handleDelete={ handleDelete }/> */}
            {/* <BlogList blogs={ blogs.filter((blog) => blog.author === 'mario') } title="Mario's Blogs"/> */}
            {/* <button onClick={() => setName('luigi')}>change name</button> */}
        </div>
    );



    // let name = 'mario';
    
    // const [name, setName] = useState('mario');
    // const [age, setAge] = useState(25);

    // const handleClick = () => {
    //     setName('luigi');
    //     setAge(30);
    // }

    // const handleClickAgain = (name) => {
    //     console.log('Hello, ' + name)
    // }
    
    // return (
    //     <div className="home">
    //         <h2>Homepage</h2>
    //         <p>{name} is {age} years old</p>
    //         <button onClick={handleClick}>Click me</button>
    //         {/* <button onClick={(e) => handleClickAgain('mario', e)}>Click me too</button> */}
    //     </div>
    // );
}
 
export default Home;