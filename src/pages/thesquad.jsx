 
 import React from 'react';
 import Navbar from './navbar';
 import Footer from './footer';
 
 
 const ThesquadPage = () => {
 
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
                        <div class="col-md-12">Team</div>
                    </div>
                    <div class="row ">
                        
                        <div class="col-md-4">
                            <img class="team-member-picture" src={ require('../images/logo.svg') }  alt="Avatar"  />
                            <div>Ron Tablan</div> 
                            <div class="bio"> The founder of App squad group at Carreer Karma. 
                            The goal is to share idea of self learning Mobile App Development. 
                             </div>
                            </div>
                        <div class="col-md-4">
                            <img class="team-member-picture" src={ require('../images/kennetheng-image.png') } />
                            <div>Kenneth Eng</div>
                            <div class="bio"> After doing self-taught for years,
                                 I am really appeciate to meet people in tech again here at Career Karma.
                                I am also interested in non-profit open source jobs. </div>    
                        </div>
                        <div class="col-md-4"><img class="team-member-picture" src={ require('../images/HajaSChilds.jpeg')} />
                        <div>Hajar Sims</div></div>
                    </div>
                </div>
                    
            </div>
            <Footer />
            </div>
        )
} 
export default ThesquadPage;