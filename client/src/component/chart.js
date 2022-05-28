import React from 'react';
import { useRef} from 'react';
import CanvasJSReact from './canvas/canvasjs.react'
import {useState,useEffect} from 'react';
import { makeSharedVirtualKeyboard } from "mathlive";
import MathView from "react-math-view";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {evaluate,derivative} from 'mathjs';
import './charts.css';
import axios from 'axios';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


function Chart() {
    return (<h>Hello</h>);
    /*
    const [data,setData] = useState();
    const [data2,setData2]=useState();
    const [value,setValue]=useState('1');
    const [topic,setTopic]=useState('Home');
    const [xL,setxL] = useState();
    const [xR,setxR] = useState();
    const [x0,setx0] = useState();
    const [xnewton,setX] = useState();

    const mvRef = useRef(null);

    const initialState=[{}]


    const token="eyJhbGciOiJIUzI1NiJ9.cmVx._CjnNi235mD7aRkNQb400UYUfPMCVB2NFKasNiKZIMs";

    const authAxios = axios.create({
        baseUrl: "http://localhost:8080/data/1",
        headers: {
            Authorization: `Bearer ${token}`, 
        }
    })
    
    function latex_to_js(input) {

        var init, fraction, square_root, nth_root, nth_power, convert_others;
    
        init = function() {
            var st1 = input;
            st1 = st1.replace(/\s/g, "");
            st1 = st1.replace(/\\times/g, "*");
            st1 = st1.replace(/\\div/g, "/");
    
            //pi
            st1 = st1.replace(/([0-9a-zA-Z\.]+)\\pi/g, "$1*3.142");
            st1 = st1.replace(/\\pi([0-9a-zA-Z\.]+)/g, "3.142*$1");
            st1 = st1.replace(/([0-9a-zA-Z\.]+)\\pi([0-9a-zA-Z\.]+)/g, "$1*3.142*$2");
            st1 = st1.replace(/\\pi/g, "3.142");
    
            st1 = fraction(st1);
            st1 = square_root(st1);
            st1 = nth_root(st1);
            st1 = nth_power(st1);
    
            //clean up brackets
            st1 = st1.replace(/\\left\(/g, "(");
            st1 = st1.replace(/\\right\)/g, ")");
            return st1;
        };
    
        fraction = function(input) {
            while (input.search(/\\frac\{(((?![\{\}]).)*)\}\{(((?![\{\}]).)*)\}/) >= 0) {
                
                input = input.replace(/\\frac\{(((?![\{\}]).)*)\}\{(((?![\{\}]).)*)\}/g, "($1)/($3)");
            }
    
            if (input.search(/\\frac/) >= 0) {
                input = convert_others("fraction", input);
            }
    
            return input;
        };
    
        square_root = function(input) {
            while (input.search(/\\sqrt\{(((?![\{\}]).)*)\}/) >= 0) {
                
                input = input.replace(/\\sqrt\{(((?![\{\}]).)*)\}/g, "sqrt($1)");
            }
    
            if (input.search(/\\sqrt\{/) >= 0) {
                input = convert_others("square root", input);
            }
    
            return input;
        };
    
        nth_root = function(input) {
            while (input.search(/\\sqrt\[(((?![\{\}]).)*)\]\{(((?![\{\}]).)*)\}/) >= 0) {
                
                input = input.replace(/\\sqrt\[(((?![\{\}]).)*)\]\{(((?![\{\}]).)*)\}/g, "pow($3,1/$1)");
            }
            if (input.search(/\\sqrt\[/) >= 0) {
                input = convert_others("nth root", input);
            }
            return input;
        };
    
        nth_power = function(input) {
            //first case: single number with curly bracket power
            while (input.search(/([0-9a-zA-Z\.]+)\^\{(((?![\{\}]).)*)\}/) >= 0) {
                
                input = input.replace(/([0-9a-zA-Z\.]+)\^\{(((?![\{\}]).)*)\}/g, "pow($1,$2)");
            }
            //second case: single number without curly bracket
            while (input.search(/([0-9a-zA-Z\.]+)\^([0-9a-zA-Z\.]+)/) >= 0) {
                
                input = input.replace(/([0-9a-zA-Z\.]+)\^([0-9a-zA-Z\.]+)/g, "pow($1,$2)");
            }
    
            //third case: bracket number without curly bracket power
            while (input.search(/\\left\(([0-9a-zA-Z\.\+\*\-\\]+)\\right\)\^([0-9a-zA-Z\.]+)/) >= 0) {
                
                input = input.replace(/\\left\(([0-9a-zA-Z\.\+\*\-\\]+)\\right\)\^([0-9a-zA-Z\.]+)/g, "pow($1,$2)");
            }
    
            //forth case: bracket number with curly bracket power
            while (input.search(/\\left\(([0-9a-zA-Z\.\+\*\-\\]+)\\right\)\^\{(((?![\{\}]).)*)\}/) >= 0) {
                
                input = input.replace(/\\left\(([0-9a-zA-Z\.\+\*\-\\]+)\\right\)\^\{(((?![\{\}]).)*)\}/g, "pow($1,$2)");
            }
            
            //fifth case: bracket number with some brackets and division sign, with curly bracket power
            while (input.search(/\\left\(([0-9a-zA-Z\.\+\*\-\\\(\)\/]+)\\right\)\^\{(((?![\{\}]).)*)\}/) >= 0) {
                
                input = input.replace(/\\left\(([0-9a-zA-Z\.\+\*\-\\\(\)\/]+)\\right\)\^\{(((?![\{\}]).)*)\}/g, "pow($1,$2)");
            }
    
            return input;
        };
        
        return init();
        
    };
    function callApi(){
        reqData(value).then(response=> setData(response.data));
    }   
    function reqData(val){
        if(val=="1"){
            return authAxios.get('http://localhost:8080/data/1');
        }
        else if(val=="2"){
            return fetch('http://localhost:8080/data/2').then(res=>res.json());
        }
        else if(val=="3"){
            return fetch('http://localhost:8080/data/3').then(res=>res.json());
        }
        else if(val=="4"){
            return fetch('http://localhost:8080/data/4').then(res=>res.json());
        }
    }
    function clearState(){
        setData(initialState);
        setData2(initialState);
    }
    function toEqual(xTemp,equation){
        return evaluate(latex_to_js(equation.replace("\\cdot","*")).replace("x",xTemp));
    }
    const handleTabChange = (event, newValue) => {
        setValue(newValue);
        clearState();
    };
    const handleTabTopicChange=(evt,newValue) => {
        setTopic(newValue);
    }
    function submit(){
        setData2(initialState);
        var equation = mvRef.current.value;
        var xLtemp =xL;
        var xRtemp = xR;
        if(value=="1"){
            var error=0.0000001;
            var check = 1;
            xLtemp=parseFloat(xLtemp);
            xRtemp=parseFloat(xRtemp);
            var oldxL=xLtemp;
            var oldxR=xRtemp;
            var x=[];
            var y=[];
            while (check >= error) {
                // xL , xR
                var fxL = toEqual(xLtemp,equation);
                var fxR = toEqual(xRtemp,equation);
                //xM
                var xM = (xLtemp+xRtemp)/2;
                var fxM = toEqual(xM,equation);
                var testCase = fxM*fxR;
                
                if(testCase>0){ //CaseA
                    oldxR=xRtemp;
                    xRtemp=xM;
                    check = Math.abs((xRtemp-oldxR)/xRtemp);
                }else if(testCase<0){ //CaseB
                    oldxL=xLtemp;
                    xLtemp=xM;
                    check = Math.abs((xLtemp-oldxL)/xLtemp);
                }else{
                    x.push(xM.toFixed(8));
                    y.push(check.toFixed(8));
                    break;
                }
                x.push(xM.toFixed(8));
                y.push(check.toFixed(8));
            }
            const xy = x.map((id,index)=>{
                let xyObject = {};
                xyObject.x = index+1;
                xyObject.y = parseFloat(y[index]);
                xyObject.indexLabel =  "x = "+ x[index];
                return xyObject;
            })
            setData2(xy);
        }
        else if(value=="2"){
            var error=0.0000001;
            var check = 1;
            xLtemp=parseFloat(xLtemp);
            xRtemp=parseFloat(xRtemp);
            var oldxL=xLtemp;
            var oldxR=xRtemp;
            var x=[];
            var y=[];
            while (check >= error) {
                var fxL = toEqual(xLtemp,equation);
                var fxR= toEqual(xRtemp,equation);
                var x1=(xLtemp*fxR)-(xRtemp*fxL);
                var x1 = x1/(fxL-fxR);
                
                var fx1 = toEqual(x1,equation);
                console.log(fx1);
                var testCase = fx1*fxR;
                if(testCase>0){ //CaseA
                    oldxR=xRtemp;
                    xRtemp=x1;
                    check = Math.abs((xRtemp-oldxR)/xRtemp);
                }else if(testCase<0){ //CaseB
                    oldxL=xLtemp;
                    xLtemp=x1;
                    check = Math.abs((xLtemp-oldxL)/xLtemp);
                }
                x.push(x1.toFixed(8));
                y.push(check.toFixed(8));
            }
            const xy = x.map((id,index)=>{
                let xyObject = {};
                xyObject.x = index+1;
                xyObject.y = parseFloat(y[index]);
                xyObject.xvalue = parseFloat(x[index]);
                return xyObject;
            })
            setData2(xy);
        }
         else if(value=="3"){
            var epsilon=0.0000001;
            var check=1;
            var x0temp=parseFloat(x0);
            var i=0;
            var error=[];
            var xtemp=[];
            while(true){
                if(check<epsilon){
                    break;
                }
                var x1 = toEqual(x0temp,equation);
                var check = Math.abs((x1-x0temp)/x1);
                error.push(check.toFixed(8));
                xtemp.push(x0temp.toFixed(8));
                
                var x0temp = x1;
            }
            const xy = error.map((id,index)=>{
                let xyObject = {};
                xyObject.x = index+1;
                xyObject.y = parseFloat(error[index]);
                return xyObject;
            })
            setData2(xy);
        }
        else if(value=="4"){
            const error=[];
            let xtemp=xnewton;
            let epsilon = 0.000001 ,check= 1;
            while(check>=epsilon) {
                let fx = toEqual(xtemp,equation);
                let fxdif =  derivative(equation, 'x').evaluate({x: xtemp});
                let newX = xtemp-(fx/fxdif);
                check = Math.abs((newX-xtemp))/newX;
                xtemp = newX;
                error.push(check.toFixed(8))
            }
            const xy = error.map((id,index)=>{
                let xyObject = {};
                xyObject.x = index+1;
                xyObject.y = parseFloat(error[index]);
                return xyObject;
            })
            setData2(xy);
        }
    }

    function setx(evt){
        setX(evt.target.value)
    }
    function setX0(evt){
        setx0(evt.target.value);
    }
    function setXL(evt){
        setxL(evt.target.value);
    }
    function setXR(evt){
        setxR(evt.target.value);
    }
    useEffect(()=>{
        //reqData(value).then(data=> setData(data));// set data from example
        makeSharedVirtualKeyboard({
            virtualKeyboardMode: "onfocus"
          });
       // mvRef.current.setValue("$x$", { suppressChangeNotifications: true });
    },[]);

    const options1 = {
        animationEnabled: true,
			exportEnabled: true,
			theme: "light1",
            zoomEnabled: true,
			title:{
				text: "Bisection"
			},
			axisY: {
                title:"Error",
				includeZero: true
			},
            axisX: {
                title:"Iteration",
				includeZero: true
			},
			data: [
                {
                    type: "line",
                    indexLabelFontColor: "#5A5757",
                    indexLabelPlacement: "outside",
                    dataPoints: data
			    },
                { 
                    type: "line",
                    indexLabelFontColor: "#5A5757",
                    indexLabelPlacement: "outside",
                    dataPoints: data2
                }
            ]
    }
    const options2 = {
        animationEnabled: true,
			exportEnabled: true,
			theme: "light1",
            zoomEnabled: true,
			title:{
				text: "False-Postion"
			},
			axisY: {
                title:"Error",
				includeZero: true
			},
            axisX: {
                title:"Iteration",
				includeZero: true
			},
			data: [
                {
                    type: "line",
                    indexLabelFontColor: "#5A5757",
                    indexLabelPlacement: "outside",
                    dataPoints: data
			    },
                { 
                    type: "line",
                    indexLabelFontColor: "#5A5757",
                    indexLabelPlacement: "outside",
                    dataPoints: data2
                }
            ]
    }
    const options3 = {
        animationEnabled: true,
			exportEnabled: true,
			theme: "light1",
            zoomEnabled: true,
			title:{
				text: "One-point Iteration"
			},
			axisY: {
                title:"Error",
				includeZero: true
			},
            axisX: {
                title:"Iteration",
				includeZero: true
			},
			data: [
                {
                    type: "line",
                    indexLabelFontColor: "#5A5757",
                    indexLabelPlacement: "outside",
                    dataPoints: data
			    },
                { 
                    type: "line",
                    indexLabelFontColor: "#5A5757",
                    indexLabelPlacement: "outside",
                    dataPoints: data2
                }
            ]
    }
    const options4 = {
        animationEnabled: true,
			exportEnabled: true,
			theme: "light1",
            zoomEnabled: true,
			title:{
				text: "Newton Rapson"
			},
			axisY: {
                title:"Error",
				includeZero: true
			},
            axisX: {
                title:"Iteration",
				includeZero: true
			},
			data: [
                {
                    type: "line",
                    indexLabelFontColor: "#5A5757",
                    indexLabelPlacement: "outside",
                    dataPoints: data
			    },
                { 
                    type: "line",
                    indexLabelFontColor: "#5A5757",
                    indexLabelPlacement: "outside",
                    dataPoints: data2
                }
            ]
    }
    return(
        <div>
            <TabContext value={topic}>
                <TabList onChange={handleTabTopicChange}>
                    <Tab label="Home" value="Home"/>
                    <Tab label="Root of Equation" value="RoE" />
                    <Tab label="Linear Algebra" value="LA" />
                </TabList>
                <TabPanel class="tabpanel" value="Home">

                </TabPanel>
                <TabPanel class="tabpanel" value="RoE">
                    <TabContext value={value}>
                        <TabList onChange={handleTabChange}>
                            <Tab label="Bisection" value="1" />
                            <Tab label="False-Postion" value="2" />
                            <Tab label="Onepoint Iteration" value="3" />
                            <Tab label="Newton Rhapson" value="4" />
                        </TabList>
                        <TabPanel value="1">
                            <MathView type="text">x^4-13</MathView>
                            <button onClick={callApi} class="button-4">Example</button>
                            <div class="graph">
                            <CanvasJSChart options={options1}/> 
                            </div>
                            <div class="form">
                                <div class="inputEqform">
                                    <h1>Equation</h1>
                                    <MathView class="inputEq" type="text" ref={mvRef}/>
                                </div>
                                <div class="inputform">
                                    <h1>XL =</h1>
                                    <input class="inputX" onChange={setXL}></input> 
                                    <h1>XR=</h1>
                                    <input class="inputX" onChange={setXR}></input>
                                </div>
                                <div class="buttonform">
                                    <button class="button-4"onClick={submit}>Submit</button>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value="2">
                            <MathView type="text">43x-1</MathView>
                            <button onClick={callApi} class="button-4">Example</button>
                            <div class="graph">
                                <CanvasJSChart options={options2}/> 
                            </div>
                            <div class="form">
                                <div class="inputEqform">
                                    <h1>Equation</h1>
                                    <MathView class="inputEq" type="text" ref={mvRef}/>
                                </div>
                                <div class="inputform">
                                    <h1>XL =</h1>
                                    <input class="inputX" onChange={setXL}></input> 
                                    <h1>XR=</h1>
                                    <input class="inputX" onChange={setXR}></input>
                                    
                                </div>
                                <div class="buttonform">
                                    <button class="button-4"onClick={submit}>Submit</button>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value="3">
                            <MathView type="text">2-e^(x/4)</MathView>
                            <button onClick={callApi} class="button-4">Example</button>
                            <div class="graph">
                                <CanvasJSChart options={options3}/>
                            </div>
                            <div class="form">
                                <div class="inputEqform">
                                    <h1>Equation</h1>
                                    <MathView class="inputEq" type="text" ref={mvRef}/>
                                </div>
                                <div class="inputform">
                                    <h1>X0 =</h1>
                                    <input class="inputX" onChange={setX0}></input>
                                </div>
                                <div class="buttonform">
                                    <button class="button-4"onClick={submit}>Submit</button>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value="4">
                            <MathView>x^2-7</MathView>
                            <button onClick={callApi} class="button-4">Example</button>
                            <div class="graph">
                                <CanvasJSChart options={options4}/>
                            </div>
                            <div class="form">
                                <div class="inputEqform">
                                    <h1>Equation</h1>
                                    <MathView class="inputEq" type="text" ref={mvRef}/>
                                </div>
                                <div class="inputform">
                                    <h1>X =</h1>
                                    <input class="inputX" onChange={setx}></input>
                                </div>
                                <div class="buttonform">
                                    <button class="button-4"onClick={submit}>Submit</button>
                                </div>
                            </div>
                        </TabPanel>
                    </TabContext>
                </TabPanel>
                <TabPanel class="tabpanel" value="LA">
                    <TabContext value={value}>
                        <TabList onChange={handleTabChange}>
                            <Tab label="Cramer's Rule" value="5" />
                            <Tab label="Glauss Elimination" value="6" />
                            <Tab label="Gauss-Jordan" value="7" />
                            <Tab label="LU Decomposition" value="8" />
                            <Tab label="Jacobi Iteration" value="9" />
                            <Tab label="Gauss-Seidel Iteration" value="10"/>
                        </TabList>
                        <TabPanel value="5"></TabPanel>
                        <TabPanel value="6"></TabPanel>
                        <TabPanel value="7"></TabPanel>
                        <TabPanel value="8"></TabPanel>
                        <TabPanel value="9"></TabPanel>
                        <TabPanel value="10"></TabPanel>
                    </TabContext>
                </TabPanel>
            </TabContext>
            
        </div>
    );*/
}

export default Chart;