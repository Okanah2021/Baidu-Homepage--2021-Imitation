//————————作者：Okanah 【QQ:651954589】————————
//本项目已开源至https://github.com/Okanah2021
window.onload = function () {
//——————————————————————————————
//爬取百度时事热点排行榜，以获得实时热点数据
//实现思路：由于js不能跨域，所以无法通过纯前端来抓数据，只能用后端的正则去抓。
//我的思路是写一个抓好数据的php（用我自己的服务器去解析）放在iframe内联框里，然后返回json数组，用contentWindow去DOM它。
//这个土办法的缺点是效率低、回传速度慢，而且也只能是同域下访问，必须要放在服务器上，不能保存成本地文件，否则浏览器会有安全拦截。
//所以现在大家普遍都会去用Node.js或Python去写爬虫了,这也是未来的一个学习方向之一。
//——————————————————————————————
    var a1 = document.getElementById('GetData_Frame').contentWindow.HotDataJson;
    document.getElementById('HotText1').innerText = a1[0];
    document.getElementById('HotText2').innerText = a1[1];
    document.getElementById('HotText3').innerText = a1[2];
    document.getElementById('HotText4').innerText = a1[3];
    document.getElementById('HotText5').innerText = a1[4];
    document.getElementById('HotText6').innerText = a1[5];
//——————————————————————————————
    //点击识图按钮的效果
    var onc1 = document.getElementById('btnn')
    onc1.onclick = function () {
        if (document.getElementById('SerchInputbox').getAttribute('placeholder') == '') {
            document.getElementById('SerchInputbox').setAttribute('placeholder', '在此处粘贴图片地址');
            document.getElementById('SerchInputbox').focus();
            document.getElementById('HandFrame1').style.visibility = "visible";
            document.getElementById('SoutuBtn1').style.display = "none";
            document.getElementById('SoutuBtn2').style.display = "none";
        }
    }
    //点击拖拽图片框关闭按钮的效果
    var onc2 = document.getElementById('OffFrame')
    onc2.onclick = function () {
        if (document.getElementById('SerchInputbox').getAttribute('placeholder') == '在此处粘贴图片地址') {
            document.getElementById('HandFrame1').style.visibility = "hidden";
            document.getElementById('SoutuBtn1').style.display = "flex";
            document.getElementById('SoutuBtn2').style.display = "flex";
            document.getElementById('SerchInputbox').setAttribute('placeholder', '');
        }
    }
}
function OpenFile() {  //文件上传按钮的点击事件
    document.getElementById('Open').click();
}
function ChangeList() {
    var FirstList = document.getElementById('HotNum1');
    var a1 = document.getElementById('GetData_Frame').contentWindow.HotDataJson;
    if (FirstList.innerText == '1') {  //判断当前列表首项序号，从而得知目前在热榜的第几页
        document.getElementById('HotNum1').innerText = '7';
        document.getElementById('HotText1').innerText = a1[6];
        document.getElementById('Hot_Tip').style.visibility = "hidden";
            document.getElementById('HotNum1').style.color= "rgb(160, 160, 160)";
        document.getElementById('HotNum2').innerText = '8';
        document.getElementById('HotText2').innerText = a1[7];
            document.getElementById('HotNum2').style.color = "rgb(160, 160, 160)";
        document.getElementById('HotNum3').innerText = '9';
        document.getElementById('HotText3').innerText = a1[8];
            document.getElementById('HotNum3').style.color = "rgb(160, 160, 160)";
        document.getElementById('HotNum4').innerText = '10';
        document.getElementById('HotText4').innerText = a1[9];
        document.getElementById('HotNum5').innerText = '11';
        document.getElementById('HotText5').innerText = a1[10];
        document.getElementById('HotNum6').innerText = '12';
        document.getElementById('HotText6').innerText = a1[11];
        return "第一页切第二页";
    }
    if (FirstList.innerText == '7') {
        document.getElementById('HotNum1').innerText = '13';
        document.getElementById('HotText1').innerText = a1[12];
        document.getElementById('HotNum2').innerText = '14';
        document.getElementById('HotText2').innerText = a1[13];
        document.getElementById('HotNum3').innerText = '15';
        document.getElementById('HotText3').innerText = a1[14];
        document.getElementById('HotNum4').innerText = '16';
        document.getElementById('HotText4').innerText = a1[15];
        document.getElementById('HotNum5').innerText = '17';
        document.getElementById('HotText5').innerText = a1[16];
        document.getElementById('HotNum6').innerText = '18';
        document.getElementById('HotText6').innerText = a1[17];
        return "第二页切第三页";
    }
    if (FirstList.innerText == '13') {
        document.getElementById('HotNum1').innerText = '19';
        document.getElementById('HotText1').innerText = a1[18];
        document.getElementById('HotNum2').innerText = '20';
        document.getElementById('HotText2').innerText = a1[19];
        document.getElementById('HotNum3').innerText = '21';
        document.getElementById('HotText3').innerText = a1[20];
        document.getElementById('HotNum4').innerText = '22';
        document.getElementById('HotText4').innerText = a1[21];
        document.getElementById('HotNum5').innerText = '23';
        document.getElementById('HotText5').innerText = a1[22];
        document.getElementById('HotNum6').innerText = '24';
        document.getElementById('HotText6').innerText = a1[23];
        return "第三页切第四页";
    }
    if (FirstList.innerText == '19') {
        document.getElementById('HotNum1').innerText = '1';
        document.getElementById('HotText1').innerText = a1[0];
        document.getElementById('Hot_Tip').style.visibility = "visible";
            document.getElementById('HotNum1').style.color = "#ff0909";
        document.getElementById('HotNum2').innerText = '2';
        document.getElementById('HotText2').innerText = a1[1];
            document.getElementById('HotNum2').style.color = "rgb(218, 90, 0)";
        document.getElementById('HotNum3').innerText = '3';
        document.getElementById('HotText3').innerText = a1[2];
            document.getElementById('HotNum3').style.color = "rgb(225, 195, 29)";
        document.getElementById('HotNum4').innerText = '4';
        document.getElementById('HotText4').innerText = a1[3];
        document.getElementById('HotNum5').innerText = '5';
        document.getElementById('HotText5').innerText = a1[4];
        document.getElementById('HotNum6').innerText = '6';
        document.getElementById('HotText5').innerText = a1[5];
        return "第四页切回第一页";
    }
}
//————————热榜跳转————————
function Open_NewHotPage1() {
    var p1 = document.getElementById('HotText1').innerText;
    window.location.href = "http://www.baidu.com/s?wd=" + p1;
}
function Open_NewHotPage2() {
    var p2 = document.getElementById('HotText4').innerText;
    window.location.href = "http://www.baidu.com/s?wd=" + p2;
}
function Open_NewHotPage3() {
    var p3 = document.getElementById('HotText2').innerText;
    window.location.href = "http://www.baidu.com/s?wd=" + p3;
}
function Open_NewHotPage4() {
    var p4 = document.getElementById('HotText5').innerText;
    window.location.href = "http://www.baidu.com/s?wd=" + p4;
}
function Open_NewHotPage5() {
    var p5 = document.getElementById('HotText3').innerText;
    window.location.href = "http://www.baidu.com/s?wd=" + p5;
}
function Open_NewHotPage6() {
    var p6 = document.getElementById('HotText6').innerText;
    window.location.href = "http://www.baidu.com/s?wd=" + p6;
}
//—————————————————————
function SerchEven() {
    var text1 = document.getElementById('SerchInputbox').value;
    window.location.href = "http://www.baidu.com/s?wd=" + text1;
}