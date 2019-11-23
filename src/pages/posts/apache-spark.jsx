import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import { Link } from 'react-router-dom';
import BlogSideBar from '../blog-sidebar';

const ApacheSparkSqlPage = () => {

    return (

        <div>
            <Navbar />
            
            <div class="App-theme-dark">
            <BlogSideBar />
                
                <div class="container">
                    
                    <div class="row  text-center">
                       
                        <div class=" col-md-10 blog-content">

                            <div class="blog-title"><h3>Practice of Apache Spark sql and dataframes</h3></div>
                           

                            <div class="blog-subcontent">
                                <h3>DataFrame </h3>
                                <p>dataframes can be created by using existing RDDs, Hive Tables, text files, and 
                                external database.</p>
                                <canvas>
                                
                                        
                                </canvas>
                                </div>
                               

                        </div>
                        
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default ApacheSparkSqlPage;