import Jeson from '../Store/Jeson'


var size = Jeson.length;
var endereco;
var cep;
var object;

var arrayObject  = function(Jeson){

  var thisCEP = Jeson;
  var stringInfo = JSON.parse(thisCEP);

  //stringication

  endereco = stringInfo.logradouro + " , " + stringInfo.complemento + " , " + stringInfo.bairro + " , " + stringInfo.localidade + " , " + stringInfo.uf;
  cep = stringInfo.cep;

  object ={cep, endereco};
  return object;
}

export default arrayObject;