import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const item = selectedGood === '' ? 'No goods is' : `${selectedGood}`;

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {item} selected
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => setSelectedGood('')}
        />
      </h1>
      <table className="table">
        <tbody>
          {goods.map(el => {
            const val = el === item ? '-' : '+';

            return (
              <tr data-cy="Good">
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => {
                      setSelectedGood(el);

                      // setBtn({ val });
                    }}
                  >
                    {val}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {el}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
