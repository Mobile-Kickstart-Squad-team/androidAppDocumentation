import React from 'react';
import { Link } from 'react-router-dom';


const DocumentSideBar = () => {
    return (

        <div class="col-md-3 sidebar">
            <button class="sidebarButtom btn-secondary"  onclick="openNav()"></button>
       <nav class="nav navbar-expand-md" >
       

            <div class="navbar-collapse" id="sidebarNav" >
                <ul class="navbar mr-auto">

                    <li>
                    <Link to="/documents/hangman"><h5>Hangman game project</h5>
                    author: Ron Tablan</Link>
                    </li>
                    <li><a href="#" class="nav-link disabled">&#9776; open</a></li>
                   
                </ul>
                
            </div>
            
        </nav>
        

        </div>
        
    );
}

export default DocumentSideBar;