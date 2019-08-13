/*  https://github.com/neocotic/qrious  */
var qr = new QRious({
//element: document.getElementById('qr'),
})



function getSelectedValue() {

var levelVal = document.getElementById("levelList").value;
qr.level = levelVal;

var mimeVal = document.getElementById("mimeList").value;
qr.mime = mimeVal;

var valueVal = document.getElementById("myInp").value;
qr.value = valueVal;

var sizeVal = document.getElementById("mySize").value;
qr.size = sizeVal;

var bgColVal = document.getElementById("myBgColor").value;
qr.background = bgColVal;

var bgAlpha = document.getElementById("myBgAlpha").value;
qr.backgroundAlpha = bgAlpha;

var fgColVal = document.getElementById("myFgColor").value;
qr.background = fgColVal;

var fgAlpha = document.getElementById("myFgAlpha").value;
qr.backgroundAlpha = fgAlpha;

var Padding = document.getElementById("myPad").value;
qr.padding = Padding;

}