import React  , { useEffect, useState }from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import { Link } from 'react-router-dom';
import BlogSideBar from '../blog-sidebar';
import ReactMarkdown from 'react-markdown';


const Main= (props) => {
    const [post, setPost ]= useState("")

    useEffect(() => {
        fetch(props.posts)
        .then((res) => res.text())
        .then(md => {
          setPost( md )
        })
    }, []);

    return(
    <div>
            {/* <Navbar /> */}
            <div class="">
        
                
        <div class="container">
                    
                <ReactMarkdown source={post}></ReactMarkdown>
        
        </div>

        </div>
       
    </div>
    )
}


export default Main;