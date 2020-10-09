'use strict'

class SessionController {
  async create({view}){
    return view.render('session.create')
  }

  async store ({request, response, auth}) {
    const {email, password} = request.only([
      'email',
      'password'
    ])

    try{
      await auth.attempt(email, password)

      response.redirect('/')
    } catch(err){
      console.log(err)
    }
  }
}

module.exports = SessionController
