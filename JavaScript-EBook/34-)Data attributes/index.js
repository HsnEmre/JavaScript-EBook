//#region Using the dataset property

function showDetails(item) {
    var msg = item.innerHTML
    + "\r\nISO ID: " + item.dataset.id
    + "\r\nDial Code: " + item.dataset.dialCode;
    alert(msg);
    }
    function correctDetails(item) {
    var item = document.getEmementById("C3");
    item.dataset.id = "FR";
    item.dataset.dialCode = "33";
    }

//#endregion

















