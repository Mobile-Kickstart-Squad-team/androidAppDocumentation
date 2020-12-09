
import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import DocumentSideBar from './document-sidebar';
import Documentblog from './documents/documentblog';
import { Link } from 'react-router-dom';
const DocumentPage= () => {

    return (
        
        <div>
            <Navbar />

            <div class="App-theme-dark">
                {/* <DocumentSideBar /> */}
                <div class="container">
                    
                    <div class="row Document-content">
                        
                        <div class="col-md-12">
                        <Documentblog />
                            {/* <Link to="/documents/document">
                            </Link> */}
      
                       </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default DocumentPage;
 