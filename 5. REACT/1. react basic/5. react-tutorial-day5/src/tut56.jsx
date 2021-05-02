import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  const [firstMove, setFirstMove] = useState();

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res.data);
      setName(res.data.name);
      setMoves(res.data.moves.length);
      setFirstMove(res.data.moves[0].move.name);
    }
    getData();
  });

  return (
    <>
      <h1>
        Name:- <span style={{ color: "red" }}> {name}</span>
      </h1>
      <h1>
        Moves:- <span style={{ color: "red" }}> {moves}</span>
      </h1>
      <p>
        First Move:- <span style={{ color: "red" }}> {firstMove}</span>
      </p>
      <select
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
};

export default App;
