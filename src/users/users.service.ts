import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 0, name: 'user1', email: 'user1@gmail.com', phone: '1234' },
    { id: 1, name: 'user2', email: 'user2@gmail.com', phone: '2345' },
    { id: 2, name: 'user3', email: 'user3@gmail.com', phone: '3456' },
  ];

  getUser(phone: string) {
    if (phone) {
      const user = this.users.filter((user) => user.phone === phone);
      if (user.length > 0) {
        return user;
      }
      return 'user not found with this phone!';
    }
  }
}
