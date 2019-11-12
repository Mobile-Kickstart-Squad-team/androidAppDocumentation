
import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';

const ReactWebsiteStoryPage = () => {

    return (

        <div>
            <Navbar />

            <div class="App-theme-dark">
                <div class="container">
                    
                    <div class="row  text-center">
                        <div class="col-cd-4 left-nav">
                            <h3>Blog Post</h3>

                            <ul>

                                <li><a href="#"><Link to="/blog/reactwebsitestory">
                                    react website story</Link></a>
                                </li>
                                <li><a href="#">Blog 2</a></li>
                                <li><a href="#">Blog 3</a></li>
                            </ul>
                        </div>
                        <div class=" col-cd-8 blog-content">

                            react story
                            </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default ReactWebsiteStoryPage;