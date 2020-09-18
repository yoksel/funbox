import React from 'react';

import Card from '../product'
import { addUnitsText } from '../../helpers';

import data from '../../data.json';
import './styles.scss';

function App() {
  const cards = data.items.map(item => {
    const { id, taste, gift, weight, quantity, temptation, isClientHappy } = item;

    return (
      <Card
        id={id}
        key={id}
        title={data.common.name}
        taste={taste}
        gift={addUnitsText(gift)}
        weight={addUnitsText(weight)}
        quantity={addUnitsText(quantity)}
        temptation={temptation}
        isClientHappy={isClientHappy}
      />
    )
  });

  return (
    <div className="app">
      <h1 className="app__title">Ты сегодня покормил кота?</h1>
      {cards}
    </div>
  );
}

export default App;
