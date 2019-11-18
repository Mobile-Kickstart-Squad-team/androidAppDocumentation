import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import AppSquadPage from '../facebookpage';

const MainPage = () => {

    return (
        <div>
            <Navbar />
        
            <div class="App-theme-dark">

                
                <div class="container text-center"> 
                    Welcome to App Squad! 
                    <div class="row ">
                        
                        <div class="col-md-12">we are group of people who meet at the career karma
                        where we help each other to learn coding and prepare for bootcamp. 
                        In this squad, we will go further as team to do some extra team development.
                        This website will serve as the basic of our operation to encourage people
                        to coorperate over remote environemnt.
                     </div>
                    </div>

                    <div class="row ">
                        <div class="col-md-12">Important links</div>
                        <div class="col-md-12">Github - 
                         <a href="https://github.com/Mobile-Kickstart-Squad-team" >https://github.com/Mobile-Kickstart-Squad-team</a>
                         </div>
                    </div>
                    <div class="col-md-12">Career Karma - 
                         <a href="https://careerkarma.com/" >https://careerkarma.com/</a>
                    </div>
                    

                    <div class="row py-2">
                        <div class="col-md-12">
                            Join our Face page
                            <a href="https://www.facebook.com/groups/625936851276973/"><img src={ require('../images/icons8-facebook-24.png') }  alt="facebook" /></a></div>
                    </div>
                    
                    <div class="row">
                        
                    <div class="fb-post col-md-6 py-2" data-href="https://www.facebook.com/yingkit.ng.9/posts/3003644779663185" data-width="300" data-show-text="true"><blockquote cite="https://developers.facebook.com/yingkit.ng.9/posts/3003644779663185" class="fb-xfbml-parse-ignore">Posted by <a href="#" role="button">Ying Kit Ng</a> on&nbsp;<a href="https://developers.facebook.com/yingkit.ng.9/posts/3003644779663185">Sunday, November 17, 2019</a>
                    </blockquote></div>

                    <div class="fb-post col-md-6 py-2" data-href="https://www.facebook.com/permalink.php?story_fbid=1330177877161548&amp;id=204602096385804" data-width="400" data-show-text="true"><blockquote cite="https://developers.facebook.com/permalink.php?story_fbid=1330177877161548&amp;id=204602096385804" class="fb-xfbml-parse-ignore"><p>App Squad https://www.facebook.com/groups/625936851276973/ main page! Let&#039;s learn to code together!</p>Posted by <a href="https://www.facebook.com/Kent5i5-portfolio-204602096385804/">Kent5i5 portfolio</a> on&nbsp;<a href="https://developers.facebook.com/permalink.php?story_fbid=1330177877161548&amp;id=204602096385804">Saturday, November 16, 2019</a>
                    </blockquote></div>
                    
                    </div>

                </div>
                
            </div>

            <Footer />
        </div>
    )
}

export default MainPage;