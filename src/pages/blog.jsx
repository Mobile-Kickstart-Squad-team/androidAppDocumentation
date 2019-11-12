
import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';

const BlogPage = () => {

    return (
        
        <div>
            <Navbar />

            <div class="App-theme-dark">
            <div class="col-md-3 left-nav">
                            <h3>Blog Post</h3>

                            <ul>

                                <li><Link to="/blog/posting-ios-app-story">
                                    The journey of posting an IOS app for review
                                    <span> -Nov 12, 2019</span></Link>
                                    
                                    
                                </li>
                                <li><a href="#">Blog 2</a></li>
                                <li><a href="#">Blog 3</a></li>
                            </ul>
                        </div>
                <div class="container">
                    
                    <div class="row  text-center">
                        
                        <div class=" col-md-10 blog-content">

                           
                            </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default BlogPage;