import React, { Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';
 
export default class AppSquadPage extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <Page href="https://www.facebook.com/groups/625936851276973/" tabs="timeline" />
      </FacebookProvider>    
    );
  }
}