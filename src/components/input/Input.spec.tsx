import { screen, render } from "@testing-library/react";
import Input from "./Input";

const todo:string = '';
const setTodo=jest.fn();
const handleSubmit=jest.fn();
const todoList: string[]=[];
const handleEdit= jest.fn();
const handleDelete= jest.fn();
describe("Input Component", () => {
  it("renders correctly", () => {
    render(
      <Input
        todo={todo}
        setTodo={setTodo}
        submitFunc={handleSubmit}
        todoList={todoList}
        handleEdit={handleEdit}
        submit={false}
        handleDelete={handleDelete}
      />
    );
    expect(screen.getByText(/TodoList/)).toBeInTheDocument();
  });
});
