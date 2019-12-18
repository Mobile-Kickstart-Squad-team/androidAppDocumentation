
import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import DocumentSideBar from './document-sidebar';
import { Link } from 'react-router-dom';
const DocumentPage= () => {

    return (
        
        <div>
            <Navbar />

            <div class="App-theme-dark">
                <DocumentSideBar />
                <div class="container text-center">
                    
                    <div class="row Document-content">
                        
                        <div class="col-md-10">
                        <h3>Hangman game documentations</h3>

                            
                            <Link to="/documents/hangman"><h2>Hangman game project</h2>
                            author: Ron Tablan</Link>
                           


                            
                       </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default DocumentPage;
 