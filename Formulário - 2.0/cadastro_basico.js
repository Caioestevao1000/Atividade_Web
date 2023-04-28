function verifica(){
  let nome              =        document.getElementById('nome').value
  let genero            =        document.querySelector('input[name="genero"]:checked')
  let email             =        document.getElementById('email').value
  let dataNascimento    =        document.getElementById('data').value
  let senha             =        document.getElementById('senha').value
  let confirmarSenha    =        document.getElementById('senha2').value

  if (!nome || !genero || !email || !dataNascimento || !senha || !confirmarSenha) {
        alert("Preencha todos os campos")
    }else if (senha != confirmarSenha) {
        alert("As senhas não são iguais.")
    }else {
        alert("Cadastro realizado com sucesso!")
        window.location.href = "formulario_completo/sucesso.html"
    }
}



