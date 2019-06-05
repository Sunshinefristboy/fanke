//t12
var newS = $(".T-l-main").children();
var pants = $(".xiazhuang-main").find("li").children("a");
var moreS = $(".more-main").find("a");
var second = $(".miaoshalist-main").find("a");

console.log(second);
loadImgNews();

function loadImgNews() {
    // console.log(1)
    $.ajax({
        "type": "post",
        "url": "./newS.json",
        "dataType": "json",
        "success": function (res) {
            // console.log(res);
            for (var i = 0; i < res.length; i++) {
                var img = $("<img/>");
                img.attr("src", res[i].src);
                newS.eq(i).append(img);
            }
        }
    })
};
loadImgPant();

function loadImgPant() {
    // console.log(1)
    $.ajax({
        "type": "post",
        "url": "./pant.json",
        "dataType": "json",
        "success": function (res) {
            // console.log(res);
            for (var i = 0; i < res.length; i++) {
                var img = $("<img/>");
                img.attr("src", res[i].src);
                pants.eq(i).append(img);
            }
        }
    })
};
loadImgMore();

function loadImgMore() {
    // console.log(1)
    $.ajax({
        "type": "post",
        "url": "./more.json",
        "dataType": "json",
        "success": function (res) {
            // console.log(res);
            for (var i = 0; i < res.length; i++) {
                var img = $("<img/>");
                img.attr("src", res[i].src);
                moreS.eq(i).append(img);
            }
        }
    })
};
loadImgSecond();

function loadImgSecond() {
    // console.log(1)
    $.ajax({
        "type": "post",
        "url": "./second.json",
        "dataType": "json",
        "success": function (res) {
            // console.log(res);
            for (var i = 0; i < res.length; i++) {
                var img = $("<img/>");
                img.attr("src", res[i].src);
                second.eq(i).append(img);
            }
        }
    })
};