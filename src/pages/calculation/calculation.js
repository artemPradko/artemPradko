import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import './calculation.css';

function Calculation() {
  const [count, setCount] = useState(0);

  const values = {
    valueText1: '',
    method1() {
      return this.valueText1 + this.valueText2;
    },
    valueText2: 0,
    valueText3: '',
    dataToDisplay: null,
  };

  const initialState = {
    uname: '',
    value1: 0,
    value2: 0,
    value3: 0,
    dataToDisplay: null,
  };

  const [dataState, setDataState] = useState(initialState);
  const [isUserSubmit, setisUserSubmit] = useState(false);
  const [newState, setNewState] = useState(values);

  const onChangeData = useCallback((event) => {
    console.info(event);

    // event.target
    const { target } = event;

    const { name, value } = target;

    setDataState((prevState) => {
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

  const submit = useCallback(() => {
    console.info(dataState);
    if (
      dataState.uname &&
      dataState.value1 &&
      dataState.value2 &&
      dataState.value3
    ) {
      const valuesSum =
        parseInt(dataState.value1) +
        parseInt(dataState.value2) +
        parseInt(dataState.value3);

      setDataState((prevState) => ({
        ...prevState,
        dataToDisplay: `${dataState.uname} fill data ${valuesSum}`,
      }));
      setisUserSubmit(true);
    } else {
      alert('All fields must be filled!');
    }
  });

  const clearData = useCallback(() => {
    setisUserSubmit(false);
    setDataState(initialState);
    setCount(0);
  }, [initialState]);

  const increseCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const submits = useCallback(() => {
    console.info(newState);
    let valuesSum;
    if (newState.valueText1 && newState.valueText2 && newState.valueText3) {
      valuesSum = `${newState.valueText1} ${newState.valueText2} ${newState.valueText3}`;
      console.info(
        'v1-',
        newState.valueText1,
        'v2-',
        newState.valueText2,
        'v3-',
        newState.valueText3,
        'valuesSum-',
        valuesSum
      );
    }

    console.info(valuesSum);
    setNewState((prevState) => ({
      ...prevState,
      dataToDisplay: valuesSum,
    }));
  }, [newState]);

  const onChangeValue = useCallback((event) => {
    console.info(event);

    const { name, value } = event.target;

    setNewState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  return (
    <div className="calculationRoot">
      <Link to="/">Back</Link>
      <div className="calculationContainer">
        <div className="leftContainer">
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            className="values"
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
            onChange={onChangeData}
            value={dataState?.uname}
          />
          <label htmlFor="value1">
            <b>Value1</b>
          </label>
          <input
            className="values"
            type="number"
            placeholder="Value1"
            name="value1"
            required
            onChange={onChangeData}
          />
          <label htmlFor="value2">
            <b>Value2</b>
          </label>
          <input
            className="values"
            type="number"
            placeholder="Value2"
            name="value2"
            required
            onChange={onChangeData}
          />
          <label htmlFor="value3">
            <b>Value3</b>
          </label>
          <input
            className="values"
            type="number"
            placeholder="Value3"
            name="value3"
            required
            onChange={onChangeData}
          />

          <button className="calculationButtons" onClick={submit}>
            Submit
          </button>

          <button className="calculationButtons" onClick={clearData}>
            Clear
          </button>

          <button className="calculationButtons" onClick={increseCount}>
            Counter+
          </button>

          <span>{count}</span>

          {isUserSubmit && <div>{dataState.dataToDisplay}</div>}
        </div>

        <div className="rightContainer">
          <input
            className="values"
            name="valueText1"
            value={dataState?.valueText1}
            type="text"
            placeholder="valueText1"
            onChange={onChangeValue}
          />
          <input
            className="values"
            name="valueText2"
            type="number"
            placeholder="valueText2"
            onChange={onChangeValue}
          />
          <input
            className="values"
            name="valueText3"
            type="text"
            placeholder="valueText3"
            onChange={onChangeValue}
          />

          <button onClick={submits}>Submit</button>

          <span>{newState.dataToDisplay}</span>
        </div>
      </div>
      {/* <div className="container">
        <label for="uname">
          <b>Username</b>
        </label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <button type="submit">Login</button>
        <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember
          me
        </label>
      </div> */}
    </div>
  );
}

export default Calculation;
