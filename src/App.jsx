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
  const [item, setItem] = useState('Jam is selected');
  const [btn, setBtn] = useState('+');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {item}
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => setItem('No goods selected')}
        />
      </h1>

      <table className="table">
        <tbody>
          {goods.map(el => {
            return (
              <tr data-cy="Good">
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => {
                      setItem(el);
                      setBtn('-');
                    }}
                  >
                    {btn}
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
