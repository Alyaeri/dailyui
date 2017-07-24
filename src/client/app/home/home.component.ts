import { Component, OnInit, Inject } from '@angular/core';
import { SingleTask } from './single-task.component';
import { elementVisible, computedStyle, scrollTo, outerHeight, outerWidth } from 'ng2-utils';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {

  tasks = [
    new SingleTask('020', '020 - Location Tracking', 'Concept past trip journal for a ride sharing service',
      '../images/020.png'),
    new SingleTask('019', '019 - Leaderboard', 'Last.fm scrobble leaderboard concept for IOS app', '../images/019.png'),
    new SingleTask('018', '018 - Analytics chart', 'Minimal but vibrant line chart', '../images/018.png'),
    new SingleTask('017', '017 - Receipt', 'Urbanears receipt', '../images/017.png'),
    new SingleTask('016', '016 - Pop up/Overlay', 'Pop up subscription dialog for a food delivery service',
      '../images/016.png'),
    new SingleTask('015', '015 - On/off switch', 'Take on digital an on/off light switch', '../images/015.gif'),
    new SingleTask('014', '014 - Countdown',
      'Material Breathing animation countdown, designed as a yoga app, where the countdown is the remaining duration' +
      ' of the pose', '../images/014.gif'),
    new SingleTask('013', '013 - Direct Messaging', 'A concept of what a Material Design messaging app might look like' +
      ' for desktop', '../images/013.png'),
    new SingleTask('012', '012 - Single Product', 'Single product concept page for the new Nike Vapormax',
      '../images/012.png'),
    new SingleTask('011', '011 - Flash Messages', 'Flash Messages for success & error states', '../images/011.png'),
    new SingleTask('010', '010 - Social Share', 'Social share FAB opening into social media icons', '../images/010.gif'),
    new SingleTask('009', '009 - Music Player', 'Revising the concept Music player from the Android Reimagined project' +
      ' in my Portfolio', '../images/009.png'),
    new SingleTask('008', '008 - 404', '404 concept for Kathmandu clothing store', '../images/008.png'),
    new SingleTask('007', '007 - Settings', 'Concept settings for an ecommerce app', '../images/007.png'),
    new SingleTask('006', '006 - Profile', 'Concept profile for a shareable social media card', '../images/006.png'),
    new SingleTask('005', '005 - App Icon', 'Weather app icon using Material Design', '../images/005.png'),
    new SingleTask('004', '004 - Calculator', 'Concept calculator for Android OS using Material Design',
      '../images/004.png'),
    new SingleTask('003', '003 - Landing Page', 'Tactiv website landing page', '../images/003.png'),
    new SingleTask('002', '002 - Checkout', 'Concept checkout page for Frends headphones', '../images/002.png'),
    new SingleTask('001', '001 - Sign Up', 'A registration page for an app using my personal identity styling,' +
      ' focusing on the interaction and user experience of the registration form', '../images/001.GIF')
  ];

  scrollTo(selector: any, parentSelector: any) {
    console.log('scrollTo');
    scrollTo(
      selector,       // scroll to this
      parentSelector, // scroll within (null if window scrolling)
    );
  }


}
