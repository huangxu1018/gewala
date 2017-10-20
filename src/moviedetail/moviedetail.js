/**
 Author:zeng
 des
 Date 2017/9/12.
 Time 14:46.
 * Created by Administrator on 2017/9/12.
 */

/**
 * 评论列表
 * */
var moviedetailApp = angular.module('moviedetailPage',[]);
moviedetailApp.controller("moviedetailCtrol",function ($scope,$http,$routeParams) {
    window.doubanMovieDetailCallback = function (data) {
        if (data.msg) {
            //返回错误信息
            $scope.message = data.msg;
        } else {
            console.log(data);
            $scope.movie = data.subjects[0];
            $("#top_video").css("background","linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.9)),url("+$scope.movie.images.large+") no-repeat");
            $("#top_video").css("background-size","100% 100%");
            $scope.message = '';
        }
    };
    $http.jsonp("https://api.douban.com//v2/movie/search?q="+$routeParams.id+"&callback=doubanMovieDetailCallback")
    $scope.lists = [
        {
            head_img:"img/default_head.png",
            username:"jiangqw",
            date:"2017-09-12",
            comment:"真实、朴素、震撼",
            star_img:"img/userStar.png",
            star_num:"8.",
            decimal:"0",
            reply:"img/reply.png",
            reply_num:"0",
            comlike:"img/comlike.png",
            comlike_num:"1"
        },
        {
            head_img:"img/default_head.png",
            username:"ron214",
            date:"2017-09-12",
            comment:"满分不够，教科书电影",
            star_img:"img/userStar.png",
            star_num:"10.",
            decimal:"0",
            reply:"img/reply.png",
            reply_num:"0",
            comlike:"img/comlike.png",
            comlike_num:"0"
        },
        {
            head_img:"img/default_head.png",
            username:"R135X",
            date:"2017-09-12",
            comment:" ",
            star_img:"img/userStar.png",
            star_num:"8.",
            decimal:"0",
            reply:"img/reply.png",
            reply_num:"0",
            comlike:"img/comlike.png",
            comlike_num:"0"
        },
        {
            head_img:"img/default_head.png",
            username:"80后的牛宝宝",
            date:"2017-09-12",
            comment:"历史写的不好的我 看了这片子，真心觉得还是很不错的。几个人物映射出人性，有感动有震撼",
            star_img:"img/userStar.png",
            star_num:"9.",
            decimal:"6",
            reply:"img/reply.png",
            reply_num:"0",
            comlike:"img/comlike.png",
            comlike_num:"3"
        },
        {
            head_img:"img/default_head.png",
            username:"丫丫的世界",
            date:"2017-09-12",
            comment:"一般般啦！小厅也比较垃圾！",
            star_img:"img/userStar.png",
            star_num:"7.",
            decimal:"2",
            reply:"img/reply.png",
            reply_num:"0",
            comlike:"img/comlike.png",
            comlike_num:"0"
        },
        {
            head_img:"img/default_head.png",
            username:"wenwen2014",
            date:"2017-09-12",
            comment:"看到一半退场了，什么玩意儿，我喜欢有宏大战争场面的片子，也喜欢有内涵的文艺片。但是敦刻尔克是啥玩意儿？狗屁没有。开场几十分钟就讲了一对父子被...",
            star_img:"img/userStar.png",
            star_num:"5.",
            decimal:"0",
            reply:"img/reply.png",
            reply_num:"0",
            comlike:"img/comlike.png",
            comlike_num:"0"
        },
        {
            head_img:"img/default_head.png",
            username:"KaKaBB",
            date:"2017-09-12",
            comment:"这是一部更接近真实的战争片，特别的表达方式把人看得压抑之极，你永远不知道下一刻是生是死，在那一瞬间，在你脑海中浮现的就是拼尽全力去保命。这才...",
            star_img:"img/userStar.png",
            star_num:"8.",
            decimal:"0",
            reply:"img/reply.png",
            reply_num:"1",
            comlike:"img/comlike.png",
            comlike_num:"4"
        },
        {
            head_img:"img/default_head.png",
            username:"hx_roy",
            date:"2017-09-12",
            comment:"也许对诺兰的期望值过高，整体观影效果一般。影片从几条线展现英国人对这次大撤退的心态，从细节反映战争的残酷和民众的无私无畏。总体感觉，文化层面...",
            star_img:"img/userStar.png",
            star_num:"8.",
            decimal:"0",
            reply:"img/reply.png",
            reply_num:"1",
            comlike:"img/comlike.png",
            comlike_num:"0"
        },
        {
            head_img:"img/default_head02.jpg",
            username:"这不是一部电影",
            date:"2017-09-12",
            comment:"二战背景的，没有主线甚至没有主人公。",
            star_img:"img/userStar.png",
            star_num:"8.",
            decimal:"0",
            reply:"img/reply.png",
            reply_num:"0",
            comlike:"img/comlike.png",
            comlike_num:"1"
        },
        {
            head_img:"img/default_head.png",
            username:"mark",
            date:"2017-09-12",
            comment:"一般吧",
            star_img:"img/userStar.png",
            star_num:"8.",
            decimal:"0",
            reply:"img/reply.png",
            reply_num:"0",
            comlike:"img/comlike.png",
            comlike_num:"0"
        },
        {
            head_img:"img/default_head03.jpg",
            username:"Mistgogogo",
            date:"2017-09-12",
            comment:"哈迪老师最后开窗滑翔沙滩真的帅，执意前行拯救数人的老船长也很帅，我还要自己要留下救法国人的将军却有点突兀，王牌空军是英雄，失子但坚毅的船长也...",
            star_img:"img/userStar.png",
            star_num:"8.",
            decimal:"0",
            reply:"img/reply.png",
            reply_num:"1",
            comlike:"img/comlike.png",
            comlike_num:"2"
        },
        {
            head_img:"img/default_head.png",
            username:"28Mile",
            date:"2017-09-12",
            comment:"不错的片子",
            star_img:"img/userStar.png",
            star_num:"9.",
            decimal:"1",
            reply:"img/reply.png",
            reply_num:"0",
            comlike:"img/comlike.png",
            comlike_num:"0"
        }
    ]
});