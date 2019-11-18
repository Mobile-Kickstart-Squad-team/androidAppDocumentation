import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import BlogSideBar from './blog-sidebar';

const PostingIosAppStoryPage = () => {

    return (

        <div>
            <Navbar />
            
            <div class="App-theme-dark">

                <BlogSideBar />
                <div class="container">
                
                    <div class="row blog-title ">
                        <div class=" col-md-10 blog-content">
                        <h3>The journey of posting an IOS app for review</h3>
                        <h6>author: Kenneth Eng</h6>
                            <p>Nov 17, 2019</p>
                            </div>
                    </div>
                    <div class="row ">
                    
                        <div class=" col-md-10 blog-content">
                            <h5>Prerequisites</h5>
                           
                            <div>First: A Finished app , the product that you will submit for review</div>
                            <div>Second: Dowanload and install Xcode on your Macbook
                                Build and Archive the app when you are ready</div>
                            <div>Third: AnApple Developer Account
                                <p> It costs $100 per year; however, it is free to post any 
                                    amount of App. 
                                </p>
                               <p> Once you have an developer account, you can create a new app 
                                   in the app connect panel where you will also set up 
                                   detail about your App project. Screenshots, Video,  
                                   </p>
                                   There are three different way to release a app:
                               
                               <ul class="blog-subcontent">
                                   <li>
                                       1. Release the app in Apple App Store 
                                   </li>
                                   <li>
                                       2. Release as an Enterprise App or School App 
                                   </li>
                                   <li>
                                       3. Release to ad hoc
                                   </li>
                               </ul>  <p>Once you finish set up the project, you will go to 
                                   Xcode, Go to product->archive. 
                               </p>


                                <p> Once you finish Archive your build, you will submit it 
                                    to apple.com for reivew 
                                </p>

                               
                               <div> <h4>reivew</h4>
                               <p> When you submit your app. It will takes 1-2 days for them to review
                                   the app. 
                                   You will need pass the following categories:
                                   <ul class="blog-subcontent">
                                       <li>Design:<p>Spelling, Any misplacment, and quality</p> </li>
                                       <li>Functions: If you have login/log out/ register function, you will 
                                           need to provide temp account for them to test to make sure
                                           your accout functions is working. If they can't login, they will reject 
                                           it for sure. 
                                           <p>every link/button needs to work properly</p>
                                       </li>
                                       </ul> 
                                </p>
                               </div> 
                               <div> <h4>Rejected?</h4>
                               <p> If they reject you, you will recieve a email in which they will give you 
                                   suggestions for you improve app to pass the review.
                               </p>
                               </div>

                               <div> <h4>Accepted?</h4>
                               <p>When they accept your app, it means that you can test your with the beta
                                   test tools. You will be able to register 100 devices/account to test your.
                                    </p>
                                    <p>It is better to do beta testing before releasing it to App store.
                                   </p>
                               </div>
                               
                            </div>
                            {/* End of Sub-content */}
                        </div>
                         {/* End of blog-content */}
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default PostingIosAppStoryPage;