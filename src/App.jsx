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
  const [selectedGood, setSelectedGood] = useState('Jam is');
  const [btnShow, setBtnShow] = useState({ display: 'block' });
  const item = selectedGood === '' ? 'No goods' : `${selectedGood}`;
  const noItems = () => {
    setBtnShow({ display: 'none' });
    setSelectedGood('');
  };

  const btnAction = (btn, good) => {
    if (btn === 'AddButton') {
      setSelectedGood(good);
      setBtnShow({ display: 'block' });
    } else {
      noItems();
    }
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {item} selected
        <button
          data-cy="ClearButton"
          type="button"
          className="delete"
          style={btnShow}
          onClick={noItems}
        />
      </h1>
      <table className="table">
        <tbody>
          {goods.map(good => {
            const val = good === item ? '-' : '+';
            const stl = val === '-' ? `has-background-success-light` : ``;
            const remove = val === '+' ? 'AddButton' : 'RemoveButton';
            const isInfo = val === '-' ? 'is-info' : '';

            return (
              <tr data-cy="Good" className={`${stl}`}>
                <td>
                  <button
                    data-cy={remove}
                    type="button"
                    className={`button ${isInfo}`}
                    onClick={() => {
                      btnAction(remove, good);
                    }}
                  >
                    {val}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
