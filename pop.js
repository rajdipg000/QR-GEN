
window.onload = () => {
    chrome.tabs.query({currentWindow:true,active:true},function(tabs){
        var typeNumber = 0;
        var errorCorrectionLevel = 'L';
        var qr = qrcode(typeNumber, errorCorrectionLevel);
        qr.addData(tabs[0].url);
        qr.make();
        document.getElementById('placeHolder').innerHTML = qr.createImgTag(5);
        document.getElementById('title').innerHTML=tabs[0].title;
    });
}