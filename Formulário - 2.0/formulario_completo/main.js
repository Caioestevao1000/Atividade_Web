//Bloco de verificação de preenchimento de campos
function Verifica(event) { 
    event.preventDefault()

    let telefone          =        document.getElementById('tel').value
    let cpf               =        document.getElementById('cpf').value
    let cep               =        document.getElementById('cep').value
    let endereco          =        document.getElementById('endereco').value
    let numero            =        document.getElementById('numero').value
    let complemento       =        document.getElementById('complemento').value
    let bairro            =        document.getElementById('bairro').value
    let cidade            =        document.getElementById('cidade').value
    let estado            =        document.getElementById('estado').value
    let senha             =        document.getElementById('senha').value

    if (!telefone || !cpf || !cep || !endereco || !numero || !complemento || !bairro || !cidade || !estado || !senha ) {
      alert("Preencha todos os campos corretamente!")
    } else if (!validaCPF(cpf)) {
      alert("CPF inválido.")
      return false
    } else {
      alert("Cadastro realizado com sucesso!")
      window.location.href = "sucesso.html"
    }
    
} 
    function validaCPF(cpf) {
        cpf = cpf.replace(/[^\d]+/g,'')
      
        if (cpf.length !== 11 || cpf === "00000000000" || cpf === "11111111111" || cpf === "22222222222" || cpf === "33333333333" || cpf === "44444444444" || cpf === "55555555555" || cpf === "66666666666" || cpf === "77777777777" || cpf === "88888888888" || cpf === "99999999999") {
          return false
        }
      
        let soma = 0
        for (let i = 0; i < 9; i++) {
          soma += parseInt(cpf.charAt(i)) * (10 - i)
        }
        let resto = 11 - (soma % 11)
        let digitoVerificador1 = (resto === 10 || resto === 11) ? 0 : resto;
        if (digitoVerificador1 !== parseInt(cpf.charAt(9))) {
          return false
        }
      
        soma = 0
        for (let i = 0; i < 10; i++) {
          soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        resto = 11 - (soma % 11);
        let digitoVerificador2 = (resto === 10 || resto === 11) ? 0 : resto
        if (digitoVerificador2 !== parseInt(cpf.charAt(10))) {
          return false
        }
        return true
    }

