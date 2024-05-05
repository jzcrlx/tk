//显示与隐藏答案
function showAndHideButton(strid, strButtonId) {
    var traget = document.getElementById(strid);
    var trButton = document.getElementById(strButtonId)
    if (traget.style.display == "none") {
        traget.style.display = "";
        trButton.innerHTML = "隐藏答案";

    } else {
        traget.style.display = "none";
        trButton.innerHTML = "显示答案";
    }

}

//显示与隐藏所有答案过程
var blshow = true

function showAllDa() {
    //$("div.datas").toggle();	
    if (blshow) {
        $("div.divXSDA").text("隐藏答案");
        $("#showAllDa").text("隐藏答案");
        blshow = false;
        $("div.datas").css("display", "block");
    } else {
        $("div.divXSDA").text("显示答案");
        $("#showAllDa").text("显示答案");
        blshow = true;
        $("div.datas").css("display", "none");
    }
}



//后退过程
function goback() {
    history.back(-1);
}

//显示二维码过程
function showQrcode() {
    $("div.bottom-qrcode").toggle();
}



//下一题
function go_next() {
    //当当前的题目号为最后一题时，不再向下，因为下面没有题目了
    var myt = document.getElementsByClassName("form-label")
    if (nowTm > myt.length) {
        return
    }

    if (document.getElementById('but-show-all').textContent == '全卷') {
        //以下为单题模式       
        // var myt = document.getElementsByClassName("form-label")
        for (var i = 0; i < myt.length; i++) {
            if (myt[i].style.display == "block") {
                myt[i].style.display = "none";
                // console.log("kdk:" & myt[i + 1])
                if (i < (myt.length - 1)) {
                    nowTm = Number(i) + 1;
                    myt[i + 1].style.display = "block";
                    document.getElementById('butback').style.color = 'white';
                    document.getElementById('butback').disabled = "";
                } else {
                    //myt[0].style.display="block";  
                    nowTm = Number(i)
                    myt[i].style.display = "block";
                    document.getElementById('butnext').style.color = 'darkcyan';
                    document.getElementById('butnext').disabled = "disabled";

                }
                break;
            }

        }
        document.getElementById('div-top').style.marginBottom = document.getElementById('tm-and-but').clientHeight + 'px';
    } else {
        //以下为全卷模式       
        // var myt = document.getElementsByClassName("form-label")        
        document.getElementById('butback').style.color = 'white';
        document.getElementById('butback').disabled = "";
        if (nowTm < (myt.length - 1)) {
            nowTm += 1
        } else {
            document.getElementById('butnext').style.color = 'darkcyan';
            document.getElementById('butnext').disabled = "disabled";
        }
        $("html,body").animate({ scrollTop: $(myt[Number(nowTm)]).offset().top }, 50);
    }
}

//上一题
function go_back() {
    //当当前的题目号为0时，不再向上，因为上面没有题目了
    // if (nowTm < 1) {
    //     return
    // }
    // console.log(document.getElementById('but-show-all').textContent)
    if (document.getElementById('but-show-all').textContent == '全卷') {
        var myt = document.getElementsByClassName("form-label")
        for (var i = 0; i < myt.length; i++) {
            if (myt[i].style.display == "block") {
                myt[i].style.display = "none";
                if (i > 0) {
                    nowTm = Number(i) - 1
                    myt[i - 1].style.display = "block";
                    document.getElementById('butnext').style.color = 'white'
                    document.getElementById('butnext').disabled = "";
                } else {
                    nowTm = 0
                    myt[0].style.display = "block";
                    document.getElementById('butback').style.color = 'darkcyan'
                    document.getElementById('butback').disabled = "disabled";
                }
                break;
            }

        }
        document.getElementById('div-top').style.marginTop = document.getElementById('tm-and-but').clientHeight + 'px';
    } else {
        document.getElementById('butnext').style.color = 'white'
        document.getElementById('butnext').disabled = "";
        var myt = document.getElementsByClassName("form-label")
        if (nowTm > 0) {
            nowTm -= 1
        } else {
            document.getElementById('butback').style.color = 'darkcyan'
            document.getElementById('butback').disabled = "disabled";
        }
        $("html,body").animate({ scrollTop: $(myt[Number(nowTm)]).offset().top }, 50);
    }

}




//跳转到指定的题目
function goToNumTm(strNum) {
    //让【上一题】【下一题】生效
    document.getElementById('butnext').style.color = 'white'
    document.getElementById('butnext').disabled = "";
    document.getElementById('butback').style.color = 'white'
    document.getElementById('butback').disabled = "";
    var showTT = document.getElementsByClassName("form-label")
    var butshowalltxt = document.getElementById('but-show-all').textContent
    if (butshowalltxt == '全卷') {
        //当是单题模式时只显示指定题目
        var myt = document.getElementsByClassName("form-label")
        for (var i = 0; i < myt.length; i++) {
            myt[i].style.display = "none";
        }
        showTT[Number(strNum)].style.display = "block";
        showTT[Number(strNum)].style.marginTop = '5px';

    } else {
        //当是全卷模式时则跳转到指定题目的位置   
        var strtmid = showTT[Number(strNum)].id
        // console.log(strNum)
        // console.log(strtmid)
        $("html,body").animate({ scrollTop: $(showTT[Number(strNum)]).offset().top }, 50);
        // nowTm = strNum
    }
    nowTm = Number(strNum)
    // console.log(nowTm)
}

//显示所有题目
var nowTm = 0 //保存当前查看到的题目
function go_show_all() {
    if (document.getElementById('but-show-all').innerHTML == '全卷') {
        //显示全部题目
        document.getElementById('but-show-all').innerHTML = "单题";
        var showTT = document.getElementsByClassName("form-label");
        var myt = document.getElementsByClassName("form-label");
        for (var i = 0; i < myt.length; i++) {
            myt[i].style.display = "block";
        }
        // var strtmid = showTT[Number(nowTm)].id          
        $("html,body").animate({ scrollTop: $(showTT[Number(nowTm)]).offset().top }, 50);
        return
    } else {
        //显示单一个题目
        document.getElementById('but-show-all').innerHTML = "全卷";
        var showTT = document.getElementsByClassName("form-label");
        var myt = document.getElementsByClassName("form-label");
        for (var i = 0; i < myt.length; i++) {
            myt[i].style.display = "none";
        }
        showTT[Number(nowTm)].style.display = "block";
        document.getElementById('div-top').style.marginBottom = document.getElementById('tm-and-but').clientHeight + 'px';
        // $("html,body").animate({scrollTop: $(showTT[Number(nowTm)]).offset().top - document.getElementById('tm-and-but').clientHeight}, 50);
        return
    }
}

//生成题目列表
var allNumTm = document.getElementsByClassName("form-label")
$(document).ready(function () {
    for (var i = 0; i < allNumTm.length; i++) {
        var aobj = document.createElement('button');
        aobj.innerHTML = i + 1;
        aobj.setAttribute('value', i);
        aobj.setAttribute('onclick', "goToNumTm('" + i + "')");
        document.getElementById('numToClass').appendChild(aobj);
    }
    //显示标题到主页面上方
    top.document.getElementById("topTextId").textContent = "☰ 目录 ➤ " + document.title.replace(" - 公众号：急诊超人老谢","")
});

// // 页面上端留空
// $(document).ready(function () {
//     nowTm = 0
//     // var myt = document.getElementsByClassName("form-label");
//     // for (var i = 0; i < myt.length; i++) {
//     //     myt[i].style.display = "none";
//     // }
//     // myt[0].style.display = "block";
//     document.getElementById('div-top').style.marginBottom = document.getElementById('tm-and-but').clientHeight + 'px';
// });

function hideTop() {
    // let numY = document.documentElement.scrollTop
    if (document.getElementById('numToClass').style.display == "block") {
        //window.scrollTo(0,numY + document.getElementById('numToClass').clientHeight );        
        document.getElementById('numToClass').style.display = "none"
        document.getElementById('shownumToClass').textContent = "展开题表"
        document.getElementById('div-top').style.marginBottom = document.getElementById('tm-and-but').clientHeight + 'px';
        // window.scrollTo(0,numY + document.getElementById('numToClass').clientHeight );  


    } else {
        document.getElementById('numToClass').style.display = "block"
        document.getElementById('shownumToClass').textContent = "收起题表"
        document.getElementById('div-top').style.marginBottom = document.getElementById('tm-and-but').clientHeight + 'px';
        //   window.scrollTo(0,numY - document.getElementById('numToClass').clientHeight);
    }
}

function goTop(){
    // 回到页面顶端
    $("html,body").animate({ scrollTop: 0 }, 50);
}