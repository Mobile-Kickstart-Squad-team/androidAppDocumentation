
import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import BlogSideBar from './blog-sidebar';

const BlogPage = () => {

    return (
        
        <div >
            <Navbar />

            <div class="App-theme-dark">
            
            <BlogSideBar />   
          
                <div class="container">
                    
                    <div class="row  text-center">
                        
                        <div class=" col-md-10 blog-content">
                        <h3>Blog Post</h3>

                                                

                        <Link to="/blog/posting-ios-app-story">
                            The journey of posting an IOS app for review
                            <span> -Nov 12, 2019</span></Link><br />
                            
                            

                        <a href="/blog/apache-spark">Practice Apache Spark sql and dataframes</a>

                                                
                            </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default BlogPage;