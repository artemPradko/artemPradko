import React, { useCallback, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './toDoList.scss';

function toDo() {
  const addList = ({ todo }) => {
    // eslint-disable-next-line lodash/prefer-lodash-method
    // eslint-disable-next-line array-callback-return
    const addOne = List.map((item) => {
      const { id, ...deletes } = item;
    });

    return (
      <li key={id} className="list-group-item">
        {...itemProps} onDeleted={() => onDeleted(id)}
      </li>
    );
  };

  const list = ['Get Up'];

  return (
    <div>
      <input onClick={list.push()} type="text" placeholder="add" />
      <li>{list}</li>
    </div>
  );
}

export default toDo;
