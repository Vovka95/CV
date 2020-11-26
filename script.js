const generatePDF = () => {
    const fileURL = 'https://drive.google.com/file/d/1zr66ZYuT0P2NS6XOfd3SekrExGFkJ23y/view?usp=sharing';
    const fileName = 'volodymy_protskyi-cv.pdf';

    // for non-IE
    if (!window.ActiveXObject) {
        var save = document.createElement('a');
        save.href = fileURL;
        save.target = '_blank';
        save.download = fileName || 'unknown';

        var evt = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': false
        });
        save.dispatchEvent(evt);

        (window.URL || window.webkitURL).revokeObjectURL(save.href);
    }

    // for IE < 11
    else if ( !! window.ActiveXObject && document.execCommand)     {
        var _window = window.open(fileURL, '_blank');
        _window.document.close();
        _window.document.execCommand('SaveAs', true, fileName || fileURL)
        _window.close();
    }   
}

const generatePDFButtons = document.querySelectorAll('.generate-pdf');
generatePDFButtons.forEach((btn) => {
    btn.addEventListener('click', generatePDF);
});