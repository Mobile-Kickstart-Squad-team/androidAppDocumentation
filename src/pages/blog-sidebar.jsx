import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';

const BlogSideBar = () => {
    return (

        <div class="col-md-3 sidebar">
            <button class="sidebarButtom btn-secondary"  onclick="openNav()"></button>
       <nav class="nav navbar-expand-md" >
       

            <div class="navbar-collapse" id="sidebarNav" >
                <ul class="navbar mr-auto">

                    <li><a href="#"><Link to="/blog/posting-ios-app-story">
                        The journey of posting an IOS app for review</Link></a>
                    </li>
                    <li><Link to="/blog/android-firestore-tutorial">How to integrate the firestore database into 
                    an android app.</Link></li>
                    <li><a href="#" class="nav-link disabled">&#9776; open</a></li>
                </ul>
                
            </div>
            
        </nav>
        

        </div>
        
    );
}

export default BlogSideBar;