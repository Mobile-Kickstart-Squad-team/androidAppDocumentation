import React from 'react';
import Navbar from './navbar';
import Footer from './footer';


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
                    

                    <div class="row ">
                        <div class="col-md-12">
                            Join our Face page
                            <a href="https://www.facebook.com/groups/625936851276973/"><img src={ require('../images/icons8-facebook-24.png') }  alt="facebook" /></a></div>
                    </div>
                    
                </div>
                
            </div>

            <Footer />
        </div>
    )
}

export default MainPage;