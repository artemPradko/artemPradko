import React, { useCallback, useMemo, useState } from 'react';

import './priceList.css';
// import { useCallback } from 'react';

function PriceList() {
   const initialState = {
     name: '',
     price: 0,
     count: 0,
     totalAmount: 0
   }

   const initialTotalValue = {
       amount: 0
   }

   const [priceList, setPriceList] = useState([]);
   const [newValue, setNewValue] = useState(initialState);
   const [totalValue, setTotalValue] = useState(initialTotalValue);

   const onChangeData = useCallback((event) => {
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
  }, []);

  const addNewItem = useCallback(() => {
      const valueToSet = {
          ...newValue,
          totalAmount: newValue.price * newValue.count
      }


      console.info('add Item new State ---', priceList)

      const newList = [
        ...priceList, valueToSet
    ]

      setPriceList(prevState => {
        console.info(':(')

        return newList
      })

      setNewValue(initialState)

      const totalV = newList.reduce((sum, item) => {
        
        console.info('newList.reduce ---', item, sum)
        
        return sum + item.totalAmount
      }, 0)

      console.info('totalV ---', totalV)

      setTotalValue((prevState) => {
          const changeTotalValue = {
            ...prevState,
            amount: totalV
          }

          return changeTotalValue;
      })
  }, [priceList, newValue])

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

const deleteItem = useCallback((item) => {
    let idx = priceList.findIndex(f => f === item)

    let newItemList = [
      ...priceList?.slice?.(0, idx),
      ...priceList?.slice?.(idx + 1)
    ]

    setPriceList(newItemList)
  })

   return(
      <div>
         {priceList.length > 0 && priceList.map((item) => (
        <div key={priceList.indexOf(item)}>
          <li>{item?.name}</li>
          <li>{item?.price}</li>
          <li>{item?.count}</li>
          <li>{item?.totalAmount}</li>
          <button onClick={() => deleteItem(item)}>Delete</button>
        </div>
       ))}
         <div>
             <input
              name="name" onChange={onChangeData}
              value={newValue?.name} type="text"
             />
             <input 
              name="price" onChange={onChangeData}
              value={newValue?.price} type="number"
             />
             <input
              name="count" onChange={onChangeData}
              value={newValue?.count} type="number"
             />
             <li></li>
             <button onClick={addNewItem}>Add</button>
         </div>
         <div>
             <li>Total</li>
             <li>{totalValue.amount}</li>
         </div>
      </div>
   )
}

export default PriceList