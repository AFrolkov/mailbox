var app = angular.module('myApp', []);

app.directive('userCards', function() {
    return {
        restrict: "E",
        link: function(scope) {
            scope.users = [{
             name: 'Паша',
             address: 'Москва',
             phone: 89265884554,
             email: 'nnn@gmail.com'
            }, {
             name: 'Миша',
             address: 'Ульяновск',
             phone: 8547895445,
             email: 'aaa@gmail.com'
            }, {
             name: 'Гоша',
             address: 'Самара',
             phone: 56654844848,
             email: 'ddd@gmail.com'
            }];
        },
        template: `
            <div>
                <user-card ng-repeat="user in users"></user-card>
            </div>`
    }   
});

app.directive('userCard', function() {
    return {
        restrict: 'E',
        template: `
            <table>
                <tr>
                    <td>{{user.name}}</td>
                </tr>
                <tr>
                    <td>{{user.address}}</td>
                </tr>
                <tr>
                    <td>{{user.phone}}</td>
                </tr>
                <tr>
                    <td>{{user.email}}</td>
                </tr>
            </table>`
    }
});

app.directive('test', function() {
    return {
        restrict: 'E',
        scope: {
            value: '@',
            call: '&'
        },
        link: function(scope){
            scope.call({nam: 'Artem', age: 27});
        },
        template: `<input ng-model="value"/>`
    };
});

app.controller('Ctrl', function() {
    this.showHello = function (name, age) {
        console.log('name = ' + name);
        console.log('age = ' + age);
    }
});