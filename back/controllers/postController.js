const Post = require('../models/postModel');

// FUNCIONES CON LOS POSTS

exports.muestra_posts = function(req, res){

    Post.getPosts(function(err, post){
        
        if (err) {
            res.send(err);
        }

        res.status(200).send({ok: true, data: post})

    })
}

exports.anadir_post = function(req, res){

    console.log(req.body);

    var anadePost = new Post(req.body);

    Post.createPost(anadePost, function(err, creaPost){

        if (err) {
            res.send(err);
        }

        Post.getPosts(function(err, post){
            if (err) {
                res.send(err);
            }
    
            res.status(200).send({ ok:true, msg: "Creado", data: post})
        })

    })
}


exports.obten_post = function(req, res){

    var postId = req.params.id;

    Post.getPost(postId, function(err, obtenPost){

        if (err) {
            res.send(err);
        }

        res.status(200).send({ok:true, msg: "Obtenido", data: obtenPost})

    })
}

exports.actualiza_post = function(req, res){

    var postId = req.params.id;
    var postActualiza = new Post(req.body);

    Post.updatePost(id_post, postActualiza, function(err, creaPost){

        if (err) {
            res.send(err);
        }

        Post.getPosts(function(err, post){
            if (err) {
                res.send(err);
            }
    
            res.status(200).send({ ok:true, msg: "Actualizado", data: post})
        })

    })
}

exports.borra_post = function(req, res){

    var postId = req.params.id;
    console.log(postId);

    Post.remove(postId, function(err, postId){

        if (err) {
            res.send(err);
        }

        res.status(200).send({ok:true, msg: "Borrado", data: postId})

    })
}