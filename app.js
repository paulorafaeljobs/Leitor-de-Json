let btn_import = document.getElementById('importar');
let file = document.getElementById('file');
btn_import.addEventListener('click', () => { 
    file.click(); 
});

file.addEventListener('change', () => {
    if (file.files.length <= 0) {
        return;
    }
    let reader = new FileReader();
    reader.onload = () => {
        lendoJson(reader.result);   
    }
    reader.readAsDataURL(file.files[0]);
});

function lendoJson(jsn) {
    let request = new XMLHttpRequest()
    request.open("GET", jsn, false)
    request.send();
    let data = request.responseText;
    document.getElementById('result').innerHTML = data;
    localStorage.setItem('Produtos',data);
    var ProdutosJson =  localStorage.getItem('Produtos');
    var Produtos = JSON.parse(ProdutosJson);
    console.table(Produtos);
    //location.reload()
}
