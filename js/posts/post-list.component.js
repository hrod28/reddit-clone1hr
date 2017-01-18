(function(){
    "use strict";

    angular.module('app')
          .component('postList', {
              templateUrl: '/js/posts/post-list.template.html',
              //controllerAs: 'model',
              controller: controller
         })

          function controller(){
           var vm = this

           vm.$onInit = onInit;
           vm.togglePostForm = togglePostForm;
           vm.createPost = createPost;
           vm.createComment = createComment;
           vm.voteUp = voteUp;
           vm.voteDown = voteDown;


          function onInit(){

              vm.posts = [
                {
                  title: "Nothing Gold Can Stay",
          body: "Nature's first green is gold, her hardest hue to hold\n\nHer early leaf's a flower, but only so an hour.\nThen leaf subscribes to leaf, so eden sank to grief.\n\nThen dawn goes down to day,\n\nNothing gold can stay.",
          author: 'Rober Frost',
          image_url: 'images/download.jpeg',
          vote_count: 5,
          created_at: new Date(2010, 8, 27),
          comments: [
            {content: 'Firsties!'},
            {content: 'I did it for the lulz'},
          ],
        },
        {
          title: "Stopping by the woods on a snowy evening",
          body: "Who's woods these are I think I know, his house is in the village, though.",
          author: 'Robert Frost',
          image_url: 'images/images.jpeg',
          vote_count: 4,
          created_at: new Date(1979, 9, 28),
          comments: [
            {content: 'Great post!'},
          ],
        },
        {
          title: "The road not taken",
          body: "Two roads diverged in a yellow wood, and sorry I could not travel both....",
          author: 'Robert Frost',
          image_url: 'images/images (1).jpeg',
          vote_count: 0,
          created_at: new Date(1984, 12, 29),
          comments: [ ],
                },
              ]
            }

          function togglePostForm(){

              vm.addingPost = !vm.addingPost;
          }

          function createPost(){

              vm.post.vote_count = 0;
              vm.post.created_at = new Date;
              vm.post.comments = [];
              vm.posts.push(vm.post);
              vm.togglePostForm();
              delete vm.post;
          }

          function createComment(post) {
              post.comments.push(post.newComment);
              delete post.newComment;
          }

          function voteUp(post) {
            post.vote_count ++;
          }

          function voteDown(post){
              if (post.vote_count === 0)
                  return post.vote_count--;



          }

      }

}());
