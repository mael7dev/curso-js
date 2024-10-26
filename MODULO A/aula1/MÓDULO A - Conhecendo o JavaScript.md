MÓDULO A - Conhecendo o JavaScript

Aula 1

Sites que utilizam JS
-Youtube
-Google
-Netflix
-Facebook
-Instagram

Tecnologias que utilizam JS
-React
-jQurry
-Cordova

(✓) Não Pule
(✓) Anote Tudo
(✓) Duas Telas
(✓) Praticar
(✓) Compartilhar o Curso

Client x Server
PC, Celular, Tablet = Client
Youtube, Google, Instagram = Server

Para acessar um servidor por meio do client, basta utilizar a URL do servidor.

Client = Front-End
Server = Back-End

como é feito um WebSite de um jeito simples de enteder.
HTML = Jornalista/Conteúdo
CSS = Designer/Estilo
Programador = JavaScript/Interação

Aula 2

Evolução JS

Em meados de 1970 acontecia a "Grande Guerra Fria", que foi uma guerra psicologica e tecnologica, a URSS foi o primeiro país a lançar um satélite pro espaço, com medo disso, os EUA junto ao Eisenhower, decretou uma agência de pesquisa tecnologica, a DARPA para pesquisar tecnologias para a Guerra, a DARPA resolveu criar uma rede para salvar dados, caso de um bombardeio, essa rede foi chamada de ARPANET, ao passar dos anos, ARPANET teve que mudar de nome, e hoje é conhecida como INTERNET.

Em 1993 o inglês Tim Berners-Lee, foi o criador da linguagem HTML, o protocolo HTTP e também a World Wide Web (WWW), ao passar dos anos, em 1995 Brendan Eich junto a Netscape fundou uma linguagem de Programação, conhecida mundialmente como JavaScript (que não tem nada relacionada com a Linguagem Java).

ECMAScript

1997 - 1.0
1998 - 2.0
1999 - 3.0
2009 - ES5
2015 - ES6
2016 - ES 2016
2017 - ES 2017
2018 - ES 2018
...

Tecnologias para estudar, depois de aprender JavaScript

() jQuerry
() ReactJS
() Vue.JS*
() ElectronJS
() Phaser
() PixiJS
() Impact
() Melon.JS
() CraftyJS

Aula 3

30% do tempo estudando assistindo as aulas os outros 70% PRATICANDO!

Como Aprender?

-Ler livros
-Praticar
-Ver videos
-Anotar
-Comunicar com outros estudantes
-Pensar em projetos e cria-los

Bibliografia
-JavaScript o Guia definitivo
-JavaScript Guia do Programador

Programas que serão utilizados no Curso:

Chrome/OperaGX - Vizualizar o seu Site
Visual Studio Code - Digitar os códigos
NodeJS - Rodar o JS fora do navegador

Aula 4

Código da aula de hoje:

HTML

<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Olá Mundo!</h1>
    <p>Já me livrei da maldição</p>
    <button>Clique Aqui!</button>
    <script src ="aula1.js"></script>
  </body>
</html>

CSS

body {
    background-color: rgba(162, 62, 239, 0.655)
}

* {
    font-family: JetBrains Mono;
}

button {
    cursor: pointer;
}

h1 {
    color: rgba(255, 225, 0, 0.851);
}

JavaScript

alert("Meu primeiro script, Olá Mundo!");
    window.confirm("Está gostando do governo Lule?");
    window.prompt("qual é seu nome?");
console.log('Receba pai')