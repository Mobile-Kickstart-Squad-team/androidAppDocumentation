import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import { Link } from 'react-router-dom';
import BlogSideBar from '../blog-sidebar';
import ReactMarkdown from 'react-markdown';

const markdown = `
# How to implement basic setting Activity View 
###### author: Kenneth Eng
###### Nov 23, 2020


- *first step*
##### With android built-in gallery template, we can create Setting Activity which also incldues a setting fragement and a root preferences.xml with some sample settings. 

        
    public class SettingsFragment extends PreferenceFragmentCompat {

        @Override
        public void onCreatePreferences(Bundle savedInstanceState, String rootKey) {
            setPreferencesFromResource(R.xml.root_preferences, rootKey);
            ...
        }
    }


#####  Create a switch setting with SQLite and  

    <PreferenceScreen xmlns:app="http://schemas.android.com/apk/res-auto">

        <PreferenceCategory app:title="@string/sync_header">

        <SwitchPreferenceCompat
            app:key="sync"
            app:title="@string/sync_title" />

        <SwitchPreferenceCompat
            app:dependency="sync"
            app:key="attachment"
            app:summaryOff="@string/attachment_summary_off"
            app:summaryOn="@string/attachment_summary_on"
            app:title="@string/attachment_title" />

    </PreferenceCategory>

    </PreferenceScreen>

##### Delete other preferenceCategory, we leave with a single setting.

* the template already use SharedPreferences object to store setting choice in mobile device momory

* Retrieve the data anywhere in the project where you need to use the setting choice. 
##### retrieve setting from parse server ( below will retrieve )

    SharedPreferences devicePreference = PreferenceManager.getDefaultSharedPreferences(getContext());
    boolean isSync = devicePreference.getBoolean("sync", false);

>> The code use app key "sync" of the SwitchPreferenceCompat, the app can tell if the user want to stay in sync 
with the server. In this example, user stop recieve message from server if turn this off. 


##### To enable offline mode, we need to store data in SQLiteDatabase so  user can view the old 
contents at least. 

    SQLiteDatabase yinDatabase = getActivity().openOrCreateDatabase("Users", MODE_PRIVATE, null);
    yinDatabase.execSQL("INSERT OR REPLACE INTO messagestable (message, reciever , sender ) VALUES ('"
    + message+ "', '" + reciever + "', '" + sender + "')");

>> We can use SharePreferences and SQLitDatabase in any activity or fragment 
or we can have single class to handle all SQLiteDatabase activities. 







`     

const AndroidSettingTutorial= () => {
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


export default AndroidSettingTutorial;

