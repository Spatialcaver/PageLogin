function entrar(event){
    event.preventDefault();
    
    var user = document.getElementById("user").value
    var senha = document.getElementById("senha").value 
    var home = href = 'https://everton-gabriel-port.netlify.app'

    if(user === 'teste' && senha === 'teste'){
        window.location.href = home
        
    }
        else if(user === "" ){
            alert("O campo Usuario deve ser preenchido!")
           document.getElementById('user').style.backgroundColor = 'red'

        }
        else if(senha === "" ){
            alert("O campo Senha deve ser preenchido!")
            document.getElementById('senha').style.backgroundColor = 'red';
        }
    
        else {
        alert('Usuario ou senha invalidos.')
        
        }
}

function cadastrar(event){
    event.preventDefault();
    var nome = document.getElementById('cadnome')
    var sobrenome = document.getElementById('cadsobrenome')
    var email = document.getElementById('cademail')
    var user = document.getElementById('cadusuario')
    var senha = document.getElementById('cadsenha')

    

    if (nome === '') { 
        alert("O campo Nome deve ser preenchido!");
        document.getElementById('cadnome').style.backgroundColor = 'red';
    } else if (sobrenome === '') {
        alert("O campo Sobrenome deve ser preenchido!");
        document.getElementById('cadsobrenome').style.backgroundColor = 'red';
    } else if (email === '') {
        alert("O campo Email deve ser preenchido!");
        document.getElementById('cademail').style.backgroundColor = 'red';
    } else if (user === '') {
        alert("O campo Usuario deve ser preenchido!");
        document.getElementById('cadusuario').style.backgroundColor = 'red';
    } else if (senha === '') {
        alert("O campo Senha deve ser preenchido!");
        document.getElementById('cadsenha').style.backgroundColor = 'red';
    } else {
        alert('Cadastro realizado com sucesso, faça login para continuar');
        window.location.href = 'index.html'; 
    }
}









function redefinir(){
var user = document.getElementById('userRedef').value

if( user === '' ){
    alert('O campo "User" deve ser preenchido!')
    document.getElementById('userRedef').style.backgroundColor = 'red';

}else {
    alert("Solicitação para alteração de credencial enviada, verifique seu email. ")

}
}
