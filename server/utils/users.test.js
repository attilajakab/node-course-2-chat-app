const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
    var users;
    
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Jen',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Julie',
            room: 'Node Course'
        }];
    });

    it('should remove a user', () => {
        const userId = '1';
        const user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        const userId = '555';
        const user = users.removeUser(userId);
        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        const userId = '2';
        const user = users.getUser(userId);
        expect(user).toBeTruthy();
    });

    it('should not find user', () => {
        const userId = '555';
        const user = users.getUser(userId);
        expect(user).toBeFalsy();
    });

    it('should add new user', () => {
        const users = new Users();
        users.addUser(123, 'Attila', 'Developers');
        expect(users.users.length).toBe(1);
    });

    it('should return names for a room', () => {
        const userList = users.getUserList('Node Course');
        expect(userList.length).toBe(2);
    });
});