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
  const [btnShow, setBtnShow] = useState({ display: 'block' });
  const [isPressed, setIsPressed] = useState(false);
  const item = selectedGood === '' ? '' : ` ${selectedGood}`;
  const itemToShow = el => {
    if (el === '') return 'No goods selected';

    return `${item} is selected`;
  };

  const noItems = () => {
    setBtnShow({ display: 'none' });
    setSelectedGood('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {itemToShow(item)}
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
            const [btnLbl, setBtnLbl] = useState('+');
            const [remove, setRemove] = useState('AddButton');
            let val = '+';
            const stl = btnLbl === '-' ? `has-background-success-light` : ``;
            const isInfo = btnLbl === '-' ? 'is-info' : '';
            const btnLblShow = () => {
              if (val === '+' && isPressed === false) {
                setIsPressed(true);
                val = '-';
                setBtnLbl('-');
              } else {
                val = '+';
                setBtnLbl('+');
                setIsPressed(false);
              }

              setBtnLbl(val);
            };

            const btnAction = () => {
              if (remove === 'AddButton' && !isPressed) {
                setSelectedGood(good);
                setBtnLbl('-');
                setRemove('RemoveButton');
              } else {
                setSelectedGood('');
                setBtnLbl('+');
                setRemove('AddButton');
              }
            };

            return (
              <tr key={good} data-cy="Good" className={stl}>
                <td>
                  <button
                    data-cy={remove}
                    type="button"
                    className={`button ${isInfo}`}
                    onClick={() => {
                      btnAction();
                      btnLblShow();
                    }}
                  >
                    {btnLbl}
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
