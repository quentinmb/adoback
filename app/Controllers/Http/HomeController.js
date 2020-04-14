'use strict'

const User = use('App/Models/User')

class HomeController {
    async home({ view, request, response }){
        var user = await User.query().where('username', 'Quentin12').first();

        if(!user){
            user = new User();
            user.username = 'Quentin12';
            user.email = 'quentin2.mberi@gmail.com';
            user.password = 'test';
            await user.save();
        }
        var number = 2;
        var test = 1+1;
        return view.render('home',{
            title : 'test',
            test : test,
            user : user,
            number : number
        });
    }

}

module.exports = HomeController;
