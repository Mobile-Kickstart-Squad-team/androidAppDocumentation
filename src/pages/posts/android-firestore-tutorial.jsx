import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import { Link } from 'react-router-dom';
import BlogSideBar from '../blog-sidebar';

const AndroidFirestoreTutorial = () => {
    return (

        <div>

            <Navbar />
            
            <div class="App-theme-dark">
                <BlogSideBar />

                <div class="container">
                    
                    <div class="row blog-title ">
                        <div class=" col-md-10 blog-content">
                        <div class="blog-title"><h3>How to integrate the firestore database into 
                        an android app</h3></div>
                        <h6>author: Kenneth Eng</h6>
                            <p>Dec 17, 2019</p>
                            </div>
                        
                        </div>

                    <div class="row ">
                    
                        <div class=" col-md-10 blog-content">
                            <div> <h4>Setting Firebase project</h4> </div>


                            <ul class="blog-subcontent">  <h5>Prerequisites</h5>
                                   <li>
                                       1. Google Cloud Platform Account
                                   </li>
                                   <li>
                                       2. Firebase Account
                                   </li>
                                   <li>
                                       3. Android Studio 
                                   </li>
                            </ul>
                            
                            
                           
                        </div>

                    </div>

                    
                    <div class="row " >
                        <div class=" col-md-10 blog-content">   
                        <p> Once you have all Prerequisites accounts, you can create new project from the firebase panel. </p>
                        
                        
                        <img src={require('../../images/firebase-newproject.png')}></img>
                        </div>
                        <div class=" col-md-10 blog-content">  
                            <ul class="blog-subcontent">  <h5>Steps of creating firebase project</h5>
                                    <li>
                                        1. Enter the name of your project
                                    </li>
                                    <li>
                                        2. Choose to enable Google analytics 
                                    </li>
                                    <li>
                                        3. Choose the default firebase account or create a new one.
                                    </li>
                            </ul>
                            <p>After you finish the creating the app, you will have option to create an android of 
                                version of the app. </p>
                            <p>We will need the package name, so next step is to make an android project with 
                                android studio. 
                            </p>
                            <img src={require('../../images/android-create-newproject.png')} width="500px"></img> 
                        </div>
                        <div class=" col-md-10 blog-content">  
                            <ul class="blog-subcontent">  <h5>Add Firebase to your Android app </h5>
                                    <li>
                                        <p>1. Register your name with name</p>
                                        <img src={require('../../images/firebase-registerapp.png')}  width="500px"></img>
                                        <p>Nickname is option. SHA-1 is the key app store key which can be added later</p>
                                    </li>
                                    <li>
                                        2. Download the generated config file ("google-service.json") and put in the  "app" folder.
                                    </li>
                                    <li>
                                        <p>3. Modify gradle files</p> 
                                        <p>
                                            // Add the following line to the project gradle (not mobule):
                                            classpath 'com.google.gms:google-services:4.3.3'  // Google Services plugin
                                        
                                        </p>
                                        <img src={require('../../images/android-firebase1.png')}  width="500px"></img>
                                        <p>Add follow lines to  build.gradle (Module app) file similar to other plugins</p> 
                                        <p>apply plugin: 'com.google.gms.google-services'  // Google Play services Gradle plugin
                                        </p>
                                        
                                        <img src={require('../../images/android-firebase2.png')}  width="500px"></img>
                                        <p>Add the remind dependencies</p>
                                        <img src={require('../../images/android-firebase3.png')}  width="500px"></img>
                                   
                                    </li>
                            </ul>
                        </div>
                    </div>

                    <div class="row">
                        <div class=" col-md-10 blog-content">  
                        <p>Finally, Run your app to verify installation</p>
                        <p>Next: Setting up Firestore as your backend database.</p>
                        </div>
                        <div class=" col-md-10 blog-content"><a href="https://firebase.google.com/docs/android/setup">Firestore Doc</a></div>

                    </div>
                </div>     

            </div>

            <Footer />
        </div>
    )

}

export default AndroidFirestoreTutorial;