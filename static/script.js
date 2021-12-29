function getPDF(){
    html2canvas(document.querySelector("body")).then(canvas => {
        document.body.appendChild(canvas)
    });
}