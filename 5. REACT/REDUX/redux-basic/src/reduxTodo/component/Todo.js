import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, del, clearall } from "../action/index";
const Todo = () => {
  const [inputData, setInputData] = React.useState("");
  const list = useSelector((state) => state.todoReducer.list);
  console.log(list);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add Your List here 🖐✍</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Items..."
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value);
              }}
            />
            <i
              className="fa fa-plus"
              onClick={() => {
                dispatch(add(inputData), setInputData(""));
              }}
            ></i>
          </div>

          <div className="showItems">
            {list.map((elem, id) => {
              return (
                <>
                  <div className="eachItem" key={id}>
                    <h3>{elem.data}</h3>
                    <i
                      className="fa fa-trash-alt"
                      onClick={() => {
                        dispatch(del(elem.id));
                      }}
                    ></i>
                  </div>
                  ;
                </>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={() => {
                dispatch(clearall());
              }}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
