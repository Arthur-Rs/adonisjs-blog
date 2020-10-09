'use strict'

const User = use('App/Models/User')

class UserController {
  async create({view}){
    return view.render('user.create')
  }

  async store({request, response}){
    const {username, email, password, confirmPassword} = request.only([
      'username',
      'email',
      'password',
      'confirmPassword'
    ])

    try{
      await User.create({
        username,
        email,
        password
      })
    } catch(err){
      console.log(err)
      return
    }

    return response.redirect('/')
  }
}

module.exports = UserController
