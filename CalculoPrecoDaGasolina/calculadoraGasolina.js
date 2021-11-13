var valorGasolina, valorAlcool, valorConsumo, valorResultado;

do{ valorGasolina = parseFloat (prompt("Preço da gasolina R$: "));
alert ("\n");
valorAlcool = parseFloat (prompt("Preço do álcool R$: "));
valorConsumo = valorAlcool / valorGasolina;
alert("\n");
alert("Diferença de preço R$: " + valorConsumo);
while(valorGasolina <= 0){
valorGasolina = prompt ("Digite um valor maior do que zero." );
}
if (valorAlcool <=0){
valorAlcool = prompt ("Digite um valor maior do que zero." );
}
if(valorConsumo > 0.70){
alert("Nesse caso, a melhor opção é a Gasolina");
}else if
(valorConsumo < 0.70){
alert("Nesse caso, a melhor opção é o Alcool");
}else{
(valorConsumo = 0.70);
alert("Escolha o combustível de sua preferência.");
}
alert("\n");
valorResultado = prompt("Calcule de novo digitando 's' para SIM e 'n' para NÃO");
}while (valorResultado == 's');
alert ("\n");
alert("Volte sempre que precisar! É grátis!");