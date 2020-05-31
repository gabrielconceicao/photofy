import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {
        url : 'https://images.hdqwalls.com/download/spider-man-8k-2020-p7-320x480.jpg',
        description : 'Spider-man'
    },
    {
        url : 'https://images.hdqwalls.com/download/ragnar-lothbrok-assassins-creed-valhalla-8k-s0-320x480.jpg',
        description : 'Assassins Creed Valhalla'
    },
    {
        url : 'https://images.hdqwalls.com/download/harley-quinn-latest-artwork-aj-320x480.jpg',
        description : 'Harley Quinn'
    }
  ];

}
