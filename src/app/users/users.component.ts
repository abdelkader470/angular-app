import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users = [
    {
      profilePic: '../../assets/av1.jpg',
      userName: 'Ahmed',
      email: 'ahmed@gmail.com',
      phone: '0101246565',
      isVerified: true,
    },
    {
      profilePic: '../../assets/av2.png',
      userName: 'Ali',
      email: 'Ali@gmail.com',
      phone: '0101288565',
      isVerified: false,
    },
    {
      profilePic: '../../assets/av3.png',
      userName: 'Amr',
      email: 'Amr@gmail.com',
      phone: '0101246565',
      isVerified: true,
    },
    {
      profilePic: '../../assets/av4.png',
      userName: 'omar',
      email: 'omar@gmail.com',
      phone: '0101246565',
      isVerified: false,
    },
    {
      profilePic: '../../assets/av5.png',
      userName: 'Abdo',
      email: 'Abdo@gmail.com',
      phone: '0101246565',
      isVerified: true,
    },
    {
      profilePic: '../../assets/av2.png',
      userName: 'Mohamed',
      email: 'Mohamed@gmail.com',
      phone: '0101246565',
      isVerified: true,
    },
  ];
  searchQuery = ''; // Variable to store the search query

  // Function to filter users by email
  filterUsersByEmail(): any[] {
    const query = this.searchQuery.toLowerCase();
    return this.users.filter((user) =>
      user.email.toLowerCase().includes(query)
    );
  }
}
