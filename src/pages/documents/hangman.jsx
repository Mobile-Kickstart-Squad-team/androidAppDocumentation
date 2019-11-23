import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import { Link } from 'react-router-dom';
import DocumentSideBar from '../document-sidebar';

const HangmanPage = () => {
    return (

        <div>
            <Navbar />
            
            <div class="App-theme-dark">
            <DocumentSideBar />
            <div class="container">

            <div class="row document-title">
            <div class=" col-md-10 Document-content"><h3>Hangman Game</h3>
            <h6>author: : Ron Tablan </h6>
                            <p>Nov 17, 2019</p></div>
                           

                           <div class="col-md-10  document-content">
                               <h3>Main Menu </h3>
                               <p></p>
                               <canvas>
                               
                                       
                               </canvas>
                               </div>
                              

                       </div>
                       </div>
                </div>
                <Footer />
        </div>
        
    )
}

export default HangmanPage;


