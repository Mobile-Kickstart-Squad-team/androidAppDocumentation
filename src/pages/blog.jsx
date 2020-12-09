
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
                        <Link to="/blog/android-setting-implementation">
                        dndroid-setting-implementation
                            <span> -Nov 23, 2020</span></Link><br />

                        <Link to="/blog/parse-server-integration">
                        parse-server-integration
                            <span> -Nov 22, 2020</span></Link><br />

                        <Link to="/blog/what-news-android11.js">
                            What's new about Android 11.
                            <span> -Nov 11, 2020</span></Link><br />
                            
                                               
                        
                        <Link to="/blog/posting-ios-app-story">
                            The journey of posting an IOS app for review
                            <span> -Nov 12, 2019</span></Link><br />
                            
                            

                            <Link to="/blog/android-firestore-tutorial">How to integrate the firestore database into 
                    an android app.</Link>

                                                
                            </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default BlogPage;