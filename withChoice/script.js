const pdfContainer = document.getElementById('pdf-container');
const inF = document.querySelector('#inFile');

inF.addEventListener('change', ()=>{
    const file = inF.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const dataUrl = event.target.result;

            const iframe = document.createElement('iframe');
            iframe.src = dataUrl;
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = 'none';

            pdfContainer.innerHTML = '';

            pdfContainer.appendChild(iframe);
        };
        reader.readAsDataURL(file);
    }
});