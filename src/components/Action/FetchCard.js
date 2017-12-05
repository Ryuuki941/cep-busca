


var size = Jeson.length;
var endereco;
var cep;
var object;
var objArray;

var arrayObject  = function(Jeson){
for( i = 0; i < size ; i++){
  var thisCEP = Jeson.indexOf(i);
  var stringInfo = JSON.parse(thisCEP);

  //stringication

  endereco = stringInfo.logradouro + " , " + stringInfo.complemento + " , " + stringInfo.bairro + " , " + stringInfo.localidade + " , " + stringInfo.uf;
  cep = stringInfo.cep;

  object ={cep, endereco};

  objArray.push(object);
  return objArray;
}
}

export default arrayObject;