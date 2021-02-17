
const base = require('./db');


var Post = function(post){
    this.id_usuario = 1;
    this.id_post = post.id_post;
    this.message = post.message;
    this.fecha = new Date();
}


Post.getPosts = function(result){

    base.query("Select * from posts", function( err, res ){

        if (err) {
            result(err, null);
        }else{
            result(null, res)
        }

    })
}


Post.createPost = function(post, result){
    base.query('INSERT INTO posts set ?', post, function( err, res){
        if (err) {
            result(err, null);
        }else{
            result(null, res)
        }
    });
}


Post.getPost = function(idPost, result){

    base.query('SELECT * FROM posts WHERE id_post = ?', [idPost], function(err, res){
        if (err) {
            result(err, null);
        }else{
            result(null, res);
        }
    })

}


Post.updatePost = function(idPost, post, result){

    base.query('UPDATE posts set message = ? WHERE id_post = ?', [post.message, idPost], function(err, res){
        if (err) {
            result(err, null);
        }else{
            result(null, res);
        }
    })

}



Post.remove = function(idPost, result){

    base.query("DELETE FROM posts WHERE id_post = ?", [idPost], function(err, res){
        if (err) {
            result(err, null);
        }else{
            result(null, res);
        }
    })
}

module.exports = Post;