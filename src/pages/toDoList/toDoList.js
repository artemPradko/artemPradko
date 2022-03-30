import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
// import _ from 'lodash';

import './toDoList.css';

function ToDo() {
  const [itemList, setItemList] = useState([]);
  const [newValue, setValue] = useState('');
  const [itemToUpdate, setItemToUpdate] = useState(null);
  const [itemToDelete, setItemToDelete] = useState(null);

  const onChange = useCallback((e) => {
    console.info('e.target ---', e.target.value);

    const { value } = e.target;

    setValue(value);
  }, []);

  const addNewItem = useCallback(() => {
    setItemList((prevState) => {
      const newItemState = [...prevState, newValue];

      console.info('addNewItem ---', prevState, newValue, newItemState);

      return newItemState;
    });

    setValue('');
  }, [newValue]);

  const setUpdatedItem = useCallback(
    (item) => {
      console.info('setUpdatedItem ----', item, itemList);
      const index = itemList.findIndex((i) => i === item);

      setItemToUpdate(index);

      setValue(item);
    },
    [itemList]
  );

  // console.info(itemList);

  const changeValue = useCallback(() => {
    //  const index = itemList.findIndex((item) => item.index );

    console.info('changeValue ----', itemToUpdate, itemList, newValue);

    let newItemList = [];

    if (itemList.length === 1) {
      newItemList.push(newValue);
    } else {
      newItemList = [
        ...itemList?.slice?.(0, itemToUpdate),
        newValue,
        ...itemList?.slice?.(itemToUpdate + 1),
      ];
    }

    console.info('newItemList ---', newItemList);

    setItemList(newItemList);

    setItemToUpdate(null);
    setValue('');
  }, [itemList, newValue]);

  const deleteItem = useCallback((item) => {
    const idx = itemList.findIndex((f) => f === item);

    const newItemList = [
      ...itemList?.slice?.(0, idx),
      ...itemList?.slice?.(idx + 1),
    ];

    setItemList(newItemList);
  });

  return (
    <div>
      <input
        onChange={onChange}
        type="text"
        placeholder="Add another one"
        value={newValue}
      />
      {typeof itemToUpdate === 'number' ? (
        <button onClick={changeValue}>Update</button>
      ) : (
        <button onClick={addNewItem}>Add</button>
      )}
      <ul>
        {itemList.map((item) => (
          <div key={itemList.indexOf(item)} className="todoComponent">
            <li key={itemList.indexOf(item)}>{item}</li>
            <button onClick={() => setUpdatedItem(item)}>Change</button>
            <button onClick={() => deleteItem(item)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
