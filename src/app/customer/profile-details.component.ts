import { Component } from '@angular/core';

@Component({
    // selector: 'sky-vertical-tabs-demo',
  templateUrl: "./profile-details.component.html"
})
export class ProfileDetailsComponent
{
    // public groups: any[];

    // constructor() {
    //   this.groups = [
    //     {
    //       heading: 'Group 1',
    //       isOpen: false,
    //       isDisabled: false,
    //       subTabs: [
    //         { tabHeading: 'Group 1 — Tab 1', content: 'Group 1 — Tab 1 Content'},
    //         { tabHeading: 'Group 1 — Tab 2', content: 'Group 1 — Tab 2 Content', tabHeaderCount: 7}]
    //     },
    //     {
    //       heading: 'Group 2',
    //       isOpen: true,
    //       isDisabled: false,
    //       subTabs: [
    //         { tabHeading: 'Group 2 — Tab 1', content: 'Group 2 — Tab 1 Content', active: true},
    //         { tabHeading: 'Group 2 — Tab 2 — Disabled',
    //           content: 'Group 2 — Tab 2 Content',
    //           disabled: true
    //         }]
    //     },
    //     {
    //       heading: 'Disabled',
    //       isOpen: false,
    //       isDisabled: true,
    //       subTabs: []
    //     }
    //   ];
    // }
  
    // public tabChanged(newIndex: any) {
    //   console.log(`new active ${newIndex}`);
    // }
  
    
orders=[

    {
    "orderId":123456,
    "price":450,
    "rating":3.2
    }
  ]


// window.onload = function () {
//     startTab();
// };

//  openCity(evt, cityName) :void{
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
//   }
  
//   // Get the element with id="defaultOpen" and click on it

//    
 }
