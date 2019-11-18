import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';

const BlogSideBar = () => {
    return (

        <div class="col-md-3 left-nav">
        <h3>Blog Post</h3>

        <ul>

            <li><a href="#"><Link to="/blog/posting-ios-app-story">
                The journey of posting an IOS app for review</Link></a>
            </li>
            <li><a href="/blog/apache-spark-sql">Practice Apache Spark sql and dataframes</a></li>
            <li><a href="#">Blog 3</a></li>
        </ul>
        </div>
    );
}

export default BlogSideBar;