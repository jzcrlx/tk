function w3_open() {
    if (document.getElementById("mySidebar").style.display == "block") {
        document.getElementById("main").style.marginLeft = "0%";
        document.getElementById("mySidebar").style.display = "none";
    } else {
        document.getElementById("main").style.marginLeft = "180px";
        document.getElementById("mySidebar").style.width = "180px";
        document.getElementById("mySidebar").style.display = "block";
    }
}

function iframeHeight() {
    document.getElementById('iframeId').height = "100%";
}


function changeSrc(strurl, strTextChan) {
    document.getElementById("iframeId").src = strurl;
    document.getElementById("topTextId").innerHTML = "☰　目录 ➤ 【" + strTextChan + "】 - 急诊超人老谢";
    w3_open();
}


function showAndHideButton(strid) {
    var traget = document.getElementById(strid);
    if (traget.style.display == "none") {
        traget.style.display = "";
    } else {
        traget.style.display = "none"
    }

}

// 跳转到具体的题库页面
function changeSrcToPage(strurl) {
    window.location.href = strurl
    top.document.getElementById("main").style.marginLeft = "0%";
    top.document.getElementById("mySidebar").style.display = "none";
}