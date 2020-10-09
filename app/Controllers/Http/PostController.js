'use strict'

const Post = use('App/Models/Post')

class PostController {

  async index ({ view }) {

    const posts = await Post.all()

    return view.render('index', {
      posts: posts.toJSON()
    })
  }

  async create ({view}){
    return view.render('post.create')
  }

  async store({request, response, auth}){
    const {title, body} = request.only([
      'title',
      'body'
    ])

    await Post.create({
      title,
      body,
      user_id: auth.user.id
    })

    return response.redirect('/')
  }
}

module.exports = PostController
