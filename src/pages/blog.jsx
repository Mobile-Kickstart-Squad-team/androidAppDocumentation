
import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import ApacheSparkSqlPage from './posts/apache-spark-sql.jsx'

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
                                <li><a href="/blog/apache-spark-sql">Practice Apache Spark sql and dataframes</a></li>
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