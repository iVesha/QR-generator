/*  https://github.com/neocotic/qrious  */
var qr = new QRious({
element: document.getElementById('qr'),
})



function getSelectedLevel() {
var levelVal = document.getElementById("levelList").value;
qr.level = levelVal;
}

function getSelectedMime() {
var mimeVal = document.getElementById("mimeList").value;
qr.mime = mimeVal;
}

function getSelectedValue() {
var valueVal = document.getElementById("myInp").value;
qr.value = valueVal;
}

function getSelectedSize() {
var sizeVal = document.getElementById("mySize").value;
qr.size = sizeVal;
}

function getSelectedBgCol() {
var bgColVal = document.getElementById("myBgColor").value;
qr.background = bgColVal;
}

function getSelectedBgAlp() {
var bgAlpha = document.getElementById("myBgAlpha").value;
qr.backgroundAlpha = bgAlpha;
}

function getSelectedFgCol() {
var fgColVal = document.getElementById("myFgColor").value;
qr.background = fgColVal;
}

function getSelectedFgAlp() {
var fgAlpha = document.getElementById("myFgAlpha").value;
qr.backgroundAlpha = fgAlpha;
}

function getSelectedPadding() {
var mPadd = document.getElementById("myPad").value;
qr.padding = mPadd;
}

