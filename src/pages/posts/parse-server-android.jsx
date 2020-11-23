import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import { Link } from 'react-router-dom';
import BlogSideBar from '../blog-sidebar';
import ReactMarkdown from 'react-markdown';
const markdown = `
# Integrate parse server api with android app
###### author: Kenneth Eng
###### Nov 23, 2020

### We can set up connections in MainActivity - onCreateView() method:

- *first step*
#### parse.initialize - connect to the server and give the login user permissions 
        Parse.initialize(new Parse.Configuration.Builder(getApplicationContext())
                .applicationId("app_id")
                // if defined
                .clientKey("master_key")
                .server("http://parse-server-url/parse/")
                .build()
        );
        ParseUser.enableAutomaticUser();
        ParseACL defaultACL = new ParseACL();
        defaultACL.setPublicReadAccess(true);
        defaultACL.setPublicWriteAccess(true);
        ParseACL.setDefaultACL(defaultACL, true);


- *second step*

#### Retrieve user list
        ParseQuery<ParseUser> query = ParseUser.getQuery();
        query.whereEqualTo("level", "Employee");
        query.whereWithinMiles("location", ParseUser.getCurrentUser().getParseGeoPoint("location"), 100);
        query.setLimit(5);
        final String[] result
        query.findInBackground(new FindCallback<ParseUser>() {
        @Override
        public void done(List<ParseUser> objects, ParseException e) {
            if (objects.size() > 0) {
                int i = 0;
                for (ParseUser object : objects) {
                    result[i] = object.getUsername();
                    i++;
                }
            builder.setTitle(R.string.dialog_title)

            AlertDialog dialog = builder.create();
            dialog.show();
            } 
        }
    >> Here I set the query with conditions to find the data from parse server
    >> I used the result to construct a AlertDialog object to display the result
    >> It is important to do actions( carete AlertDialog, Intent , etc ) within the 
    >> the findInBackground block which will keep everything in sync.
`
const ParseServerAndroid = () => {
    return(
    <div>
            <Navbar />
            <div class="App-theme-dark">
            <BlogSideBar />
                
        <div class="container">
           
        <ReactMarkdown source={markdown}>
        
        </ReactMarkdown>
        
        </div>

        </div>
        <Footer />
    </div>
    )
}


export default ParseServerAndroid;