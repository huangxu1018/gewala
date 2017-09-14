/**
 * Created by lenovo on 2017/9/12.
 */
//图片展示
$('.owl-carousel').owlCarousel({
    items: 5 ,
    loop:false,
    margin: 1,
    merge: true,
    responsive: {
        678: {
            mergeFit: true
        },
        1000: {
            mergeFit: false
        }
    }
});
//选项卡