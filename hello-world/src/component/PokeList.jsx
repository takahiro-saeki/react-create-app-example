import React from 'react';
import {Card, CardTitle} from 'material-ui/Card';

const imgPath = i => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
}

const PokeList = ({title, path}) => (
  <Card>
    <CardTitle title={title} />
    <div>
      <img src={imgPath(path)} className="testImg" alt=""/>
    </div>
  </Card>
)

export default PokeList;
