import React, { useState } from "react";
import Counter from "./counter";

const CounterList = () => {
  const [counters, setCounters] = useState([
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ]);

  const handleDelete = (id) => {
    const newCounters = counters.filter((counter) => counter.id !== id);
    setCounters(newCounters);
  };

  const handleIncrement = (id) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === id) {
        counter.value += 1;
      }
      return counter;
    });
    setCounters(newCounters);
  };

  const handleDecrement = (id) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === id) {
        counter.value -= 1;
      }
      return counter;
    });
    setCounters(newCounters);
  };

  return (
    <>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          {...counter}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
    </>
  );
};

export default CounterList;
