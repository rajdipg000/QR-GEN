
window.onload = () => {
    var customElement = $("<div>", {
        // "css"   : {
        //     "border"        : "4px dashed gold",
        //     "font-size"     : "40px",
        //     "text-align"    : "center",
        //     "padding"       : "10px"
        // },
       
    });
    $.LoadingOverlay("show");
    setTimeout(() => {
        $.LoadingOverlay("Hide");
       
    }, 2000);
        chrome.tabs.query({currentWindow:true,active:true},function(tabs){
        var typeNumber = 0;
        var errorCorrectionLevel = 'L';
        var qr = qrcode(typeNumber, errorCorrectionLevel);
        qr.addData(tabs[0].url);
        qr.make();
        var holder=document.getElementById('placeHolder')
        var imgurl=qr.createDataURL();
        document.getElementById("download").href=imgurl;
        holder.innerHTML= qr.createImgTag(3);
        
        document.getElementById('title').innerHTML=tabs[0].title;


        // holder.addEventListener("click",()=>{
        // })
    });
}