import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import LabelInput from './components/LabelInput';
import TypeSelect from './components/TypeSelect';
import DefaultValueInput from './components/DefaultValueInput';
import ChoicesArea from './components/ChoicesArea';
import OrderSelect from './components/OrderSelect';
import Button from '@mui/material/Button';

function App() {
  const [label, setLabel] = useState("");
  const [type, setType] = useState("Multi-select");
  const [isRequired, setIsRequired] = useState(false);
  const [defaultValue, setDefaultValue] = useState("Asia");
  const [choices, setChoices] = useState([]);
  const [order, setOrder] = useState("Display choices in Alphabetical");
  const [selectedLine, setSelectedLine] = useState(null);

  //处理排序
  const handleSort = (e) => {
    //触发事件的元素（比如一个下拉菜单或输入框）的当前值
    const selectedOrder = e.target.value;
    setOrder(selectedOrder);

    //This line sorts the choices array based on the value property of each object, 
    //and then updates the state of choices to this newly sorted array using the setChoices function.
    //先按照字母顺序排序，再按照时间顺序排序
    //localeCompare() 方法返回一个数字来指示一个参考字符串是否在排序顺序前面或之后或与给定字符串相同。
    if (selectedOrder === "Display choices in Alphabetical") {
      setChoices(choices.sort((a, b) => a.value.localeCompare(b.value)));
    } else if (selectedOrder === "Display choices in Time") {
      setChoices(choices.sort((a, b) => a.time - b.time));
    }
    return choices;
  };

  //处理提交
  //The handleSubmit function is an asynchronous function that is triggered when the form is submitted.
  const handleSubmit = async (e) => { //async function。async函数返回一个promise对象
    e.preventDefault();//阻止默认事件，防止页面刷新
    const formData = {
      label: label,
      type: type,
      isRequired: isRequired,
      defaultValue: defaultValue,
      choices: choices,
      order: order,
    };
    console.log("Submitted Data:", formData); 
    try {
      const response = await axios.post(
        "http://www.mocky.io/v2/566061f21200008e3aabd919",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
    
  };

  //处理重置,清空表单
  const handleFormReset = (e) => {
    e.preventDefault();
    setLabel("");
    setType("Multi-select");
    setIsRequired(false);
    setDefaultValue("");
    setChoices([]);
    setOrder("Display choices in Alphabetical");
    setSelectedLine(null);
  };


  return (
    <form className="field-builder" onSubmit={handleSubmit}>
      <h1 className="field-builder-title">Field Builder</h1>

      <LabelInput label={label} setLabel={setLabel} />
      <TypeSelect type={type} setType={setType} isRequired={isRequired} setIsRequired={setIsRequired} />
      <DefaultValueInput defaultValue={defaultValue} setDefaultValue={setDefaultValue} setChoices={setChoices} choices={choices} />
      <ChoicesArea choices={choices} setChoices={setChoices} selectedLine={selectedLine} setSelectedLine={setSelectedLine} />
      <OrderSelect order={order} handleSort={handleSort} />

      <div className="button-group">
        <Button variant="contained" type="submit">Save changes</Button>
        <Button variant="text" type="button" onClick={handleFormReset}>
          Cancel
        </Button>
      </div>


    </form>
  );
}

export default App;