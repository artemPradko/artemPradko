import React, { useCallback, useMemo, useState } from 'react';

import './priceList.css';
// import { useCallback } from 'react';

function PriceList() {
  const initialState = {
    name: '',
    price: 0,
    count: 0,
    totalAmount: 0,
  };

  const initialTotalValue = {
    amount: 0,
  };

  const [priceList, setPriceList] = useState([]);
  const [newValue, setNewValue] = useState(initialState);
  const [totalValue, setTotalValue] = useState(initialTotalValue);
  const [itemToUpdate, setItemToUpdate] = useState(null);

  const onChangeData = useCallback(
    (event) => {
      console.info(event);

      // event.target
      const { target } = event;

      const { name, value } = target;

      setNewValue((prevState) => {
        console.info(
          'prevState - ',
          prevState,
          'name of property - ',
          name,
          'new value - ',
          value
        );
        const changedState = {
          ...prevState,
          [name]: value,
        };

        return changedState;
      });
      return null;
    },
    [newValue]
  );

  const addNewItem = useCallback(() => {
    const valueToSet = {
      ...newValue,
      totalAmount: newValue.price * newValue.count,
    };

    console.info('add Item new State ---', priceList);

    const newList = [...priceList, valueToSet];

    setPriceList((prevState) => {
      console.info(':(');

      return newList;
    });

    setNewValue(initialState);

    const totalV = newList.reduce((sum, item) => {
      console.info('newList.reduce ---', item, sum);

      return sum + item.totalAmount;
    }, 0);

    console.info('totalV ---', totalV);

    setTotalValue((prevState) => {
      const changeTotalValue = {
        ...prevState,
        amount: totalV,
      };

      return changeTotalValue;
    });
  }, [priceList, newValue, initialState]);

  //   const items = useMemo(() => {

  //     console.info('items ---', priceList, priceList.length)

  //     return priceList.length > 0 && priceList.map((item) => (
  //         <div key={priceList.indexOf(item)}>
  //           <li>{item?.name}</li>
  //           <li>{item?.price}</li>
  //           <li>{item?.count}</li>
  //           <li>{item?.totalAmount}</li>
  //         </div>
  //        ))
  //   }, [priceList])

  const setUpdatedItem = useCallback(
    (item) => {
      console.info('setUpdatedItem ----', item, priceList);
      const index = priceList.findIndex((i) => i === item);

      setItemToUpdate(index);

      setNewValue(item);
    },
    [priceList]
  );

  // console.info(itemList);

  const changeValue = useCallback(() => {
    //  const index = itemList.findIndex((item) => item.index );

    const dunamicValue = {
      ...newValue,
      totalAmount: newValue?.price * newValue?.count,
    };

    console.info('changeValue ----', itemToUpdate, priceList, newValue);

    let newItemList = [];

    if (priceList.length === 1) {
      newItemList.push(newValue);
    } else {
      newItemList = [
        ...priceList?.slice?.(0, itemToUpdate),
        newValue,
        ...priceList?.slice?.(itemToUpdate + 1),
      ];
      setNewValue(dunamicValue);
    }

    console.info('dunamicValue ---', dunamicValue);

    console.info('newItemList ---', newItemList);

    setPriceList(newItemList);

    setItemToUpdate(null);
    setNewValue(initialState);
  }, [priceList, newValue, initialState, itemToUpdate]);

  const deleteItem = useCallback(
    (item) => {
      const idx = priceList.findIndex((f) => f === item);

      const newItemList = [
        ...priceList?.slice?.(0, idx),
        ...priceList?.slice?.(idx + 1),
      ];

      setPriceList(newItemList);
    },
    [priceList]
  );

  return (
    <div>
      {priceList.length > 0 &&
        priceList.map((item) => (
          <div key={priceList.indexOf(item)}>
            <li>{item?.name}</li>
            <li>{item?.price}</li>
            <li>{item?.count}</li>
            <li>{item?.totalAmount}</li>
            <button onClick={() => setUpdatedItem(item)}>Change</button>
            <button onClick={() => deleteItem(item)}>Delete</button>
          </div>
        ))}
      <div>
        <input
          name="name"
          onChange={onChangeData}
          value={newValue?.name}
          type="text"
        />
        <input
          name="price"
          onChange={onChangeData}
          value={newValue?.price}
          type="number"
        />
        <input
          name="count"
          onChange={onChangeData}
          value={newValue?.count}
          type="number"
        />
        <li></li>
        {typeof itemToUpdate === 'number' ? (
          <button onClick={changeValue}>Update</button>
        ) : (
          <button onClick={addNewItem}>Add</button>
        )}
      </div>
      <div>
        <li>Total</li>
        <li>{totalValue.amount}</li>
      </div>
    </div>
  );
}

export default PriceList;
