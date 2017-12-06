import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const CardExampleExpandable = (cep, enderecoCompleto) => (
  <Card>
    <CardHeader
      cep
      enderecoCompleto
    /><CardActions>
//add option if there is time
  </CardActions>
  </Card>
);

export default CardExampleExpandable;