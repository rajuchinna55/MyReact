import { ArrayExample } from './aarry-example/ArrayExample';
import './App.css';
import { Dbclick } from './click-events/Dbclick';
import MouseDown from './click-events/MouseDown';
import { MouseEnter } from './click-events/MouseEnter';
import { Mousehover } from './click-events/Mousehover';
import { OnClick } from './click-events/OnClick';
import { Axios } from './Crudoperastions(Fetch)/Axios';
import { DataApi } from './Crudoperastions(Fetch)/DataApi';
import { DataApi2 } from './Crudoperastions(Fetch)/DataApi2';
import { MangodpDataForm } from './Crudoperastions(Fetch)/MangodpDataForm';
import { FakestoreComponent } from './Crudoperastions(Fetch)/ShoppingCart';
import { EventListeners } from './event-listeners/EventListeners';
import { FormExamples } from './FormExamples/FormExamples';
import KeyDownComponent from './KeyDownComponent/KeyDownComponent';
import { Login } from './login';
import { Login2 } from './Login2';
import { TemplateLit } from './Templatelit/TemplateLit';
import { CondistionBase } from './ternary-operastions/CondistionBase';
import { UseState } from './use-state/UseState';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import { ShortcircuteEvelustion } from './ShortcircuteEvelostion/ShortcircuteEvelustion';
import { SpreadOperators } from './SpreadOperators/SpreadOperators';
import { UseReducer } from './UseReducer/UseReducer';
import { UseReducerEx2 } from './UseReducer/UseReducerEx2';
import { UseReducer3 } from './UseReducer/UseReducer3';
import { R1 } from './routing/R1';
import { R2 } from './routing/R2';
import { R3 } from './routing/R3';
import { Route, Router, Routes } from 'react-router-dom';
import { NavBar } from './navbar/NavBar';
import { ContextExample1 } from './useContext/ContextExample1';
import { ContextExample2 } from './useContext/ContextExample2';
import { GiftProvider } from './useContextExample/UseConextExample';
import { UseStateEx2 } from './use-state/UseStateEx2';
import { UseStateEx3 } from './use-state/UseStateEx3';
import { UseStateEx4 } from './use-state/UseStateEx4';
import { Primitive } from './data-binding/Primitive-Type';
import { ArrayFilters } from './aarry-example/ArrayFilters';
import { FormikEx } from './FormExamples/FormikEx';
import { YupDemo } from './FormExamples/FormikYup';
import { FormikEx1 } from './FormExamples/FormikEx1';
import { YupEx1 } from './FormExamples/YupEx1';
import { YupEx2 } from './FormExamples/YupEx2';
import { ShoppingIndex } from './Route-with-params/shopping-index';
import { PropDrilling } from './Props/PropDrilling';
import { useState } from 'react';
import { PropDrillingEx2 } from './Props/PropDrillingEx2';
import { RedexNavbar } from './Redux-toolkit-project/Navbar';
import { Body } from './Redux-toolkit-project/Body';
import { Table } from './Redux-toolkit-project/Redux-table/Table';
import { ReduxUserData } from './Redux-toolkit-project/ReduxApi/reduxUserData';
import { ReduxDataApi } from './Redux-toolkit-project/ReduxApiEx2/ReduxDataApi';
import { ApiComp } from './custom-hook/ApiComp';
import { MUIEx } from './ReactMUI/MUIEx';
import { FirstClass } from './class-Components/FirstClass';
import { ArrayMethods } from './Arry-methods/ArrayMethods';
import HoverOrder  from './Higher-order-component/HoverOrder';
import HigherOrder from './Higher-order-component/HigherOrder';
import { TypeScript } from './Typescript/TypeScript';
function App() {
  // const carObjct ={
  //   modal: 'a1',
  //   number: 123,
  //   year: 2014
  
  //  }
  const myObject = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
};
const product = {
  name:"rk",
  mail:"rk@gmail.com"
};
  return (
    <div className="App">
     <h1>Welcome</h1>
   {/* <Login />

     <Login2 myObject= {myObject} /> */}
     {/* <UseState /> */}
     {/* <CondistionBase /> */}
     {/* <ArrayMethods /> */}
     {/* <OnClick /> */}
     {/* <Dbclick /> */}
     {/* <Mousehover /> */}
     {/* <MouseEnter /> */}
     {/* <MouseDown /> */}
     {/* <KeyDownComponent /> */}
     {/* <EventListeners /> */}
     {/* <FormExamples /> */}
     {/* <ArrayExample /> */}
     {/* <TemplateLit /> */}
     {/* <DataApi /> */}
     {/* <DataApi2 /> */}
     {/* <MangodpDataForm /> */}
     {/* <Axios /> */}
     {/* <FakestoreComponent /> */}
     {/* <ShortcircuteEvelustion /> */}
     {/* <SpreadOperators /> */}
     {/* <UseReducer /> */}
    {/* <UseReducerEx2 /> */}
    {/* <UseReducer3 /> */}
   {/* <NavBar /> */}
    {/* <Routes>
      <Route path='/R1' element = {<R1 />} /> 
      <Route path='/R2' element = {<R2 />} />
      <Route path='/R3' element = {<R3 />} />
    </Routes> */}

    {/* <ContextExample1 /> */}

    {/* <UseStateEx2 /> */}
    {/* <UseStateEx3 /> */}
    {/* <UseStateEx4 /> */}
    {/* <Primitive /> */}
    {/* <ArrayFilters /> */}
    {/* <FormikEx /> */}
    {/* <YupDemo /> */}
    {/* <FormikEx1 />
    <hr></hr>
    <YupEx1 />
    <hr></hr>
    <YupEx2 /> */}
    {/* <ShoppingIndex /> */}
    {/* <PropDrilling product={product} /> */}
    {/* <PropDrillingEx2 product={product} /> */}
   {/* <RedexNavbar />
   <Body /> */}
   {/* <Table /> */}
   {/* <ReduxUserData /> */}
   {/* <ReduxDataApi /> */}
   {/* <ApiComp /> */}
   {/* <MUIEx /> */}
   {/* <FirstClass /> */}
   {/* <HigherOrder />
   <HoverOrder /> */}
   <TypeScript />
    </div>
  );
}

export default App;
