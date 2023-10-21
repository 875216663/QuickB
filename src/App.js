import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';//用于发送请求
import LabelInput from './components/Label/LabelInput';
import TypeSelect from './components/TypeSelect/TypeSelect';
import DefaultValueInput from './components/DefaultValueInput/DefaultValueInput';
import ChoicesArea from './components/ChoicesArea/ChoicesArea';
import OrderSelect from './components/OrderSelect/OrderSelect';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; //用于警示框
import LoadingButton from './components/LoadingButton/LoadingButton';

function App() {
  const [label, setLabel] = useState(localStorage.getItem('label') || "");
  const [type, setType] = useState(localStorage.getItem('type') || "Multi-select");
  const [isRequired, setIsRequired] = useState(JSON.parse(localStorage.getItem('isRequired')) || false);
  const [defaultValue, setDefaultValue] = useState(localStorage.getItem('defaultValue') || "Asia");
  const [choices, setChoices] = useState(JSON.parse(localStorage.getItem('choices')) || []);
  const [order, setOrder] = useState(localStorage.getItem('order') || "Display choices in Alphabetical");
  const [selectedLine, setSelectedLine] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('label', label);
    localStorage.setItem('type', type);
    localStorage.setItem('isRequired', JSON.stringify(isRequired));
    localStorage.setItem('defaultValue', defaultValue);
    localStorage.setItem('choices', JSON.stringify(choices));
    localStorage.setItem('order', order);
    
  }, [label, type, isRequired, defaultValue, choices, order]);
  //处理排序
  //This line sorts the choices array based on the value property of each object, 
  //and then updates the state of choices to this newly sorted array using the setChoices function.
  //先按照字母顺序排序，再按照时间顺序排序
  //localeCompare() 方法返回一个数字来指示一个参考字符串是否在排序顺序前面或之后或与给定字符串相同。
  //触发事件的元素（比如一个下拉菜单或输入框）的当前值
  const handleSort = (e) => {
    const selectedOrder = e.target.value;
    setOrder(selectedOrder);
    if (selectedOrder === "Display choices in Alphabetical") {
      setChoices(choices.sort((a, b) => a.value.localeCompare(b.value)));
    } else if (selectedOrder === "Display choices in Time") {
      setChoices(choices.sort((a, b) => a.time - b.time));
    }
    return choices;
  };

  //处理提交
  //The handleSubmit function is an asynchronous function that is triggered when the form is submitted.
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true before the request
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
      setTimeout(() => {
        setLoading(false);
        console.log("API Response:", response.data);
        toast.success('Form submitted successfully!');
      }, 3000);  // 3000 milliseconds, i.e., 3 seconds
  
    } catch (error) {
      setTimeout(() => {
        setLoading(false);
        console.error("Error submitting the form:", error);
        toast.error('Error submitting the form.');
      }, 2000);  // 2000 milliseconds, i.e., 2 seconds
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
    <div>
      <ToastContainer />
      <form className="field-builder" onSubmit={handleSubmit}>
        <h1 className="field-builder-title">Field Builder</h1>
        <LabelInput label={label} setLabel={setLabel} /> 
        <TypeSelect type={type} setType={setType} isRequired={isRequired} setIsRequired={setIsRequired} />
        <DefaultValueInput defaultValue={defaultValue} setDefaultValue={setDefaultValue} setChoices={setChoices} choices={choices} />
        <ChoicesArea choices={choices} setChoices={setChoices} selectedLine={selectedLine} setSelectedLine={setSelectedLine} />
        <OrderSelect order={order} handleSort={handleSort} />

        <div className="button-group">
          
          <LoadingButton isLoading={loading} variant="contained" type="submit">Save changes</LoadingButton>

          <Button variant="text" type="button" onClick={handleFormReset}>Cancel</Button>
        </div>
      </form>
    </div>
  );
}

export default App;