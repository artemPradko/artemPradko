import React, { useCallback, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import _ from 'lodash';

import './toDoList.scss';

function ToDo() {
  const [itemList, setNewItem] = useState([]);
  const [newValue, setValue] = useState('');

  const onChange = useCallback((e) => {
    console.info('e.target ---', e.target.value);

    const { value } = e.target;

    setValue(value);
  }, []);

  const addNewItem = useCallback(() => {
    setNewItem((prevState) => {
      const newItemState = [...prevState, newValue];

      return newItemState;
    });

    setValue('');
  }, [newValue]);

  const changeValue = useCallBack((change) => {
    setNewItem((prevState) => {
      const newItemState = [...prevState, itemList[change]];

      return newItemState;
    });
  });

  return (
    <div>
      <input
        onChange={onChange}
        type="text"
        placeholder="Add another one"
        value={newValue}
      />
      <button onClick={addNewItem}>Add</button>
      <ul>
        {itemList.map((item) => (
          <li key={itemList.indexOf(item)}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
