import React from 'react'
import Navbar from '../navbar';
import Footer from '../footer';
import { Link } from 'react-router-dom';
import BlogSideBar from '../blog-sidebar';
import ReactMarkdown from 'react-markdown';

const markdown = `
# What's new , *Android11*!  
## Camera X

_A new Jetpack library to help make camera app development easy and consistent across 90% of Android devices_

** Behavior changes: **
* One-time permissions: Gives users the option to grant more temporary access to location, microphone, and camera permissions.
* Permission dialog visibility: Repeated denials of a permission implies "don't ask again."
* Data access auditing: Gain insights into where your app accesses private data, both in your app's own code and in dependent libraries' code.
* System alert window permissions: Certain classes of apps are automatically granted the SYSTEM_ALERT_WINDOW permission upon request. Also, intents that include the ACTION_MANAGE_OVERLAY_PERMISSION intent action always bring users to a screen in system settings.
* Permanent SIM identifiers: On Android 11 and higher, access to the non-resettable ICCIDs through the getIccId() method is restricted. The method returns a non-null, empty string. To uniquely identify an installed SIM on the device, use the getSubscriptionId() method instead. The Subscription ID provides an index value (starting at 1) for uniquely identifying installed SIMs, including physical and electronic. The value of this identifier is stable for a given SIM unless the device is factory reset.

## Exposure Notifications
Android 11 updates the platform with the Exposure Notifications System in mind. Users can now run Exposure Notifications apps on Android 11 without needing to turn on the device location setting. This is an exception for the Exposure Notifications System only, given that it has been designed in such a way that apps using it can’t infer device location through Bluetooth scanning.

To protect user privacy, all other apps are still prohibited from performing Bluetooth scanning unless the device location setting is on and the user has granted them location permission. You can read more in our Update on Exposure Notifications post.

##  Security
* SSL sockets use Conscrypt SSL engine by default

Android's default SSLSocket implementation is based on Conscrypt. Since Android 11, that implementation is internally built on top of Conscrypt's SSLEngine.
* Scudo Hardened Allocator

Android 11 uses the Scudo Hardened Allocator internally to service heap allocations. Scudo is capable of detecting and mitigating some types of memory safety violations. If you are seeing Scudo-related crashes (for example, Scudo ERROR:) in native crash reports, refer to the Scudo troubleshooting documentation.

* App usage stats

To better protect users, Android 11 stores each user's app usage stats in credential encrypted storage. Therefore, neither the system nor any apps can access that data unless isUserUnlocked() returns true, which occurs after one of the following takes place:

**The user unlocks their device for the first time after a system startup** 
\n**The user switches to their account on the device.**

If your app already binds to an instance of UsageStatsManager, check that you call methods on this object after the user unlocks their device. Otherwise, the API now returns null or empty values.
* Emulator support for 5G

Android 11 adds 5G APIs to enable your apps to add cutting-edge features. To test the features as you add them, you can use the new capabilities of the Android SDK emulator. The new functionality was added in Emulator version 30.0.22. Selecting the 5G network setting sets TelephonyDisplayInfo to OVERRIDE_NETWORK_TYPE_NR_NSA, modifies the estimated bandwidth, and allows you to set meteredness to verify that your app responds appropriately to changes in NET_CAPABILITY_TEMPORARILY_NOT_METERED status.

[Android11](https://developer.android.com/about/versions/11/)
`;
const Android11news = () => {
    return(
        
    <div>
         <Navbar />
         <div class="App-theme-dark">
            <BlogSideBar />
                
        <div class="container">

        <ReactMarkdown source={markdown}>
        * #What's new , * Android11*!    
        </ReactMarkdown>
        
        </div>

        </div>
    <Footer />
    </div>
    )
}

export default Android11news;