import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: Array<any> = [
    {
      profilePic: '../../assets/av1.jpg',
      userName: 'Ahmed',
      email: 'ahmed@gmail.com',
      phone: '0101246565',
      isVerified: true,
      brithData: new Date(1999, 18, 9),
    },
    {
      profilePic: '../../assets/av2.png',
      userName: 'Ali',
      email: 'Ali@gmail.com',
      phone: '0101288565',
      isVerified: false,
      brithData: new Date(1998, 5, 9),
    },
    {
      profilePic: '../../assets/av3.png',
      userName: 'Amr',
      email: 'Amr@gmail.com',
      phone: '0101246565',
      isVerified: true,
      brithData: new Date(1992, 3, 6),
    },
    {
      profilePic: '../../assets/av4.png',
      userName: 'omar',
      email: 'omar@gmail.com',
      phone: '0101246565',
      isVerified: false,
      brithData: new Date(1993, 10, 10),
    },
    {
      profilePic: '../../assets/av5.png',
      userName: 'Abdo',
      email: 'Abdo@gmail.com',
      phone: '0101246565',
      isVerified: true,
      brithData: new Date(1995, 7, 3),
    },
    {
      profilePic: '../../assets/av2.png',
      userName: 'Mohamed',
      email: 'Mohamed@gmail.com',
      phone: '0101246565',
      isVerified: true,
      brithData: new Date(2000, 6, 4),
    },
  ];
  search = ''; // Variable to store the search query

  // Function to filter users by email
  filterUsersByEmail(): any[] {
    const userSearch = this.search.toLowerCase();
    return this.users.filter((user) =>
      user.email.toLowerCase().includes(userSearch)
    );
  }
  clickedUserName!: string;
  receivedName(userName: string) {
    console.log(userName);
    this.clickedUserName = userName;
  }
}
