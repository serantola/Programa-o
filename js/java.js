//varialvel onde pego os elementos do li e Div input
var btn = document.querySelectorAll(".key li")
input = document.querySelector(".input-valor"),
operator = document.querySelectorAll(".operator")


for (var i = 0; i<btn.length; i++){}
    document.onkeypress = function(event){

     var key = event.charCode;
     //mudança para o navegador
     //firefox interpretar a calculadora
for (var e = 0; e <= 10; e++){
     if(key === (48+e)){
          input.innerHTML += e;
     }
}
 switch(key){
      case 42:
      input.innerHTML += "*";
      breack;
      case 43:
      input.innerHTML += "+";
      breack;
      case 45:
      input.innerHTML += "-"
      breack;
      case 46:
      input.innerHTML += "."
      breack;
      case 47: "/"
      break
  case 13:
  case 61:
var equacao = input.innerHTML
if(equecao){
     try{
          input.innerHTML = eval(equacao);
     } catch (e) {
          alert ('Erro na expressão')
     }
}
break
case 67:
case 99:
     input.innerHTML = "";
     break;
default:
     //console.log("Procurando erros?");
     break;
 }   
};
btn[i].addEventListener('click', function(){
     var btnVal = this.innerHTML,
     inputVal = input.innerHTML;
     //console.log(btnVal);

     //crio um clear caso o c for clicado
     switch (btnVal){
          case "c":
               input.innerHTML = "";
               break;
               case "=":
                    //Crio a variável de equação aqui eu utilizo a função eval do javascript
                    var equacao = inputVal;

                    if(equacao){
                         try {
                              input.innerHTML = eval(equacao);
                         } catch (e) {
                              alert('Erro na expressão');

                         }
                    }
                    break;
                    default:
                         input.innerHTML+= btnVal;
                         break;
     }
});