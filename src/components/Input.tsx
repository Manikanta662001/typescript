import React, { Dispatch, SetStateAction } from "react";

const Input: React.FC<TodoProps> = (props) => {
  const {
    todo,
    setTodo,
    submitFunc,
    todoList,
    handleEdit,
    submit,
    handleDelete,
  } = props;
  return (
    <div>
      <h1>TodoList</h1>
      <input
        type="text"
        placeholder="Enter a Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <div>
        <button onClick={submitFunc}>{submit ? "Update" : "Submit"}</button>
      </div>
      {todoList.length > 0 ? (
        todoList.map((item, ind) => {
          return (
            <div key={ind}>
              <span>{item}</span>&nbsp;
              <button onClick={() => handleEdit(ind)}>Edit</button>&nbsp;
              <button onClick={() => handleDelete(ind)}>Delete</button>
            </div>
          );
        })
      ) : (
        <div>Todos are not present</div>
      )}
    </div>
  );
};

export default Input;

interface TodoProps {
  todo: string;
  setTodo: Dispatch<SetStateAction<string>>;
  submitFunc: (e: any) => void;
  todoList: string[];
  handleEdit: (ind: number) => void;
  submit: boolean;
  handleDelete: (ind: number) => void;
}
