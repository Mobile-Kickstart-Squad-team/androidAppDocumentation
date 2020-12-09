import React , { useEffect, useState } from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import { Link } from 'react-router-dom';
import DocumentSideBar from '../document-sidebar';
import Main from './main';
import posts from './example.markdown';
import ReactMarkdown from 'react-markdown';

const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Continue reading…',
};

const postlist = [posts];

export default function Documentblog() {
    const [state, setState] = useState("")
    useEffect(() => {
      fetch(posts)
      .then((res) => res.text())
      .then(md => {
        setState( md )
      })
  }, []);
    return (
      // <React.Fragment>   </React.Fragment>
        
        <div>
          {/* <Header title="Blog" sections={sections} /> */}
          
            {/* <MainFeaturedPost post={mainFeaturedPost} /> */}
            {/* <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid> */}
              {/* <ReactMarkdown source={state}></ReactMarkdown> */}
              <Main title="From the firehose" posts={postlist} />
              {/* <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}
              /> */}
           
        
        </div>
     
    );
}





