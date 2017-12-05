import Variable from '../Store/Variable';
import Jason from '../Store/Jeson'

function doAPI (){
  Variable.CEP = document.getElementById('CEP-value');
  window.alert(Variable.CEP.value);
  var url = 'https://viacep.com.br/ws/' + Variable.CEP.value + '/json/'
  fetch(url).then(
        function(res) {
          if (res.status !== 200) {
              window.alert('Looks like there was a problem. Status Code: ' +
              res.status);
              console.log(url,res,Variable.CEP.value) ;
            return;
          }
    
          // Examine the text in the response
          res.json().then(function(data) {
              console.log(data);
              console.log("deu good");
              Jason.push(data);
              
          });
        }
      )
      .catch(function(err) {
          window.alert('Fetch Error :-S', err);
      });         
      window.alert(Variable.CEP.value)

    }

    export default doAPI;