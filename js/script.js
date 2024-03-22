let btnCategorias = document.getElementById('btnCategorias')

btnCategorias.addEventListener('click', () => {
    let categorias = document.getElementById('categorias')
    categorias.classList.toggle('desplegar')
})


function login() {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let noLogin = document.getElementById('noLogin')

    if (email === 'user' && password === '321') {
        location.href = '../html/index.html'
    } else {
        noLogin.textContent = 'SU CORREO O CONTRASEÑA NO SON CORRECTAS'
    }
}

let productos = {
   picture: document.getElementById('picture1'),
   title: document.getElementById('title1'),
   productName: document.getElementById('productName1'),
   btnProduct: document.getElementById('btnProduct')
}
console.log(productos)

