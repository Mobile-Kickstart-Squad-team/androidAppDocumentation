import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a class="navbar-brand" href="/">App Squad </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="App-link" to="/">Home</Link> <span class="sr-only">(current)</span>
                    </li>
                    <li class="nav-item ">
                        <Link class="App-link" to="/blog">Blog</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="App-link" to="/document">Document</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="App-link" to="/thesquad">The Squad</Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#"></a>
                    </li>
                    
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;