(function(){
    "use strict";

    angular.module('app')
          .component('postList', {
              templateUrl: 'js/posts/post-list.template.html',
              controllerAs: 'model',
              controller: controller
         });

          function controller(){
           var model = this;

           model.$onInit = onInit;
           model.togglePostForm = togglePostForm;
           model.createPost = createPost;
           model.createComment = createComment;
           model.voteUp = voteUp;
           model.voteDown = voteDown;


          function onInit(){

              model.posts = [
                {
                  title: "A poem from me",
                  body:  "A wonderful...",
                  author: "Ironic Irma",
                  image_url:  " ",
                  vote_count: 1,
                  created_at: new Date(2004, 12, 17),
                  comments: [
                    {content: 'Firtsties!'},
                    {content: 'I did it for the lulz'},
                    ],
                },
                {
                  title: "Oh poem my poem",
                  body:  "The European languages",
                  author: "Emo emma",
                  image_url:  " ",
                  vote_count: 4,
                  created_at: new Date(2017, 1, 14),
                  comments: [
                    {content: 'Great post!'},
                  ],
                },
                {
                  title: "It's all about me",
                  body:  "Far, far, away, ",
                  author: "Hispster Henry",
                  image_url:  " ",
                  vote_count: 0,
                  created_at: new Date(2007, 1, 10),
                  comments: [ ],
                },
              ];
            }

          function togglePostForm(){

              model.addPost = !model.addPost;
          }

          function createPost(){

              model.post.vote_count = 0;
              model.post.created_at = new Date;
              model.post.comments = [];
              model.posts.push(model.post);
              model.togglePostForm();
              delete model.post;
          }

          function createComment(post) {
              post.comments.push(post.newComment);
              delete post.newComment;
          }

          function voteUp(post) {
            post.vote_count ++;
          }

          function voteDown(post){
              if (post.vote_count === 0){
                  return post.vote_count--;
              }


          }

      }

}());
