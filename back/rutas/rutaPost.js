module.exports = function(app){

    let controlaPost = require('../controllers/postController');


    app.route('/api/post')
        .get( controlaPost.muestra_posts )
        .post( controlaPost.anadir_post );


    app.route('/api/post/:id')
        .get( controlaPost.obten_post )
        .put( controlaPost.actualiza_post )
        .delete( controlaPost.borra_post )

}