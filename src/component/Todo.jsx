import { Button, Container, Form } from "react-bootstrap";
import "./Todo.css";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  removeTodo,
  editTodo,
} from "../redux/reducer/TodoSlice";

const Todo = () => {
  const [inputTodo, setInputTodo] = useState({
    // name:"",
    // date: "",
    // select: "",
  });
  const todoList = useSelector((state) => state.todo);
  // const [todos, setTodos] = useState([]);
  const [currentId, setCurrentId] = useState(1);
  const selectRef = useRef(false);
  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState(false);
  const handleAddSubmit = (e) => {
    e.preventDefault();
    // const newInputTodo = { ...inputTodo, id: currentId };
    // setTodos([...todos, newInputTodo]);
    // setCurrentId(currentId + 1);
    dispatch(addTodo(inputTodo));
    setInputTodo({
      name: "",
      select: "",
      date: "",
    });
    // const selectedValue = selectRef.current.value;
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // const newInputTodo = { ...inputTodo, id: currentId };
    // setTodos([...todos, newInputTodo]);
    // setCurrentId(currentId + 1);
    dispatch(editTodo(inputTodo));
    setIsUpdate(false);
    setInputTodo({
      name: "",
      select: "",
      date: "",
    });
    // const selectedValue = selectRef.current.value;
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputTodo({ ...inputTodo, [name]: value });
  };
  // console.log("input", inputTodo);

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };
  const handleEdit = (item) => {
    setInputTodo({
      name: item.name,
      id: item.id,
      date: item.date,
      select: item.select,
    });
    setIsUpdate(true);
    // dispatch(editTodo(item));
  };

  return (
    <Container>
      <Form>
        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Id</Form.Label>
          <Form.Control
            type="number"
            name="id"
            value={currentId}
            disabled
          />
        </Form.Group> */}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tên công việc</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={inputTodo.name}
            onChange={handleOnChange}
            placeholder="Nhập tên công việc"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Trạng thái</Form.Label>
          <Form.Select
            name="select"
            // defaultValue={false}
            // ref={selectRef}
            value={inputTodo.select}
            onChange={handleOnChange}
          >
            <option value={true}>Hoàn thành</option>
            <option value={false}>Đang thực hiện</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Ngày</Form.Label>
          <Form.Control
            type="date"
            placeholder="Nhập ngày"
            name="date"
            value={inputTodo.date}
            onChange={handleOnChange}
          />
        </Form.Group>

        {!isUpdate ? (
          <Button variant="primary" onClick={handleAddSubmit}>
            Add to do
          </Button>
        ) : (
          <Button variant="primary" onClick={handleEditSubmit}>
            Update to do
          </Button>
        )}
      </Form>
      <hr />
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên cv</th>
            <th>Id</th>
            <th>Status</th>
            <th>Date</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {todoList &&
            todoList.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.id}</td>
                  <td>{item.select}</td>
                  <td>{item.date}</td>
                  <td>
                    <Button onClick={() => handleEdit(item)}>
                      Edit
                    </Button>
                    <Button onClick={() => handleDelete(item.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Container>
  );
};
export default Todo;
