<?php
    session_start();
    $email = $_POST['nome_login'];
    $senha = $_POST['senha_login'];
    if($email == 'teste@teste.com' && $senha == '123'){
        header("location: http://localhost/projetos/Trabalho/Admin.html");
    } 
    else if($email == 'funcionario@teste.com' && $senha = '1234'){
        header("location: http://localhost/projetos/Trabalho/funcionario.html");
    }
    else {
        echo "E-mail e/ou senha incorretos.";
    }
?>