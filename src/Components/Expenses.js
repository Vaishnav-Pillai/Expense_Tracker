import React, { useState } from 'react';
import '../App.css';

function Expenses() {

    let [food,setFood] = useState('0');
    let [travel,setTravel] = useState('0');
    let [groceries,setGroceries] = useState('0');
    let [entertainment,setEntertainment] = useState('0');
    let [others,setOthers] = useState('0');
    let [sum,setSum] = useState('0');


    function updateSum(amt,cat){
        amt=parseInt(amt);
        food=parseInt(food);
        travel=parseInt(travel);
        groceries=parseInt(groceries);
        entertainment=parseInt(entertainment);
        others=parseInt(others);
        sum=parseInt(sum);

        if(cat===1){
            let a=food+amt;
            setFood(a);
        }
        else if(cat===2){
            let b=travel+amt;
            setTravel(b);
        }
        else if(cat===3){
            let c=groceries+amt;
            setGroceries(c);
        }
        else if(cat===4){
            let d=entertainment+amt;
            setEntertainment(d);
        }
        else if(cat===5){
            let x=others+amt;
            setOthers(x);
        }

        let s=sum+amt;
        setSum(s);

    }

    let addExpense=(e)=>{
            const form = document.forms.namedItem("cartform");
            console.log(form.elements[0].value);
            let amount=form.elements[0].value;
            let category=form.elements[1].selectedIndex
            let selected=form.elements[1].value;
            let date=form.elements[2].value;
            let note=form.elements[3].value;
            console.log(category);

            if(amount && date && note && selected){
                alert("Successfully Added Expense.");
                var table=document.getElementsByTagName("table")[0];
                var newRow=document.createElement("tr");
                newRow.innerHTML=`<tr>
                <td>${amount}</td>
                <td>${selected}</td>
                <td>${date}</td>
                <td>${note}</td>
                </tr>
                `;
                table.appendChild(newRow);

                e.preventDefault();

                updateSum(amount,category);

                document.getElementsByClassName("container")[0].style.display="none";
            }
    }

    function add_expence_page(){
        if(document.getElementsByClassName("container")[0].style.display==="block"){
            document.getElementsByClassName("container")[0].style.display="none";
        }
        else{
            document.getElementsByClassName("container")[0].style.display="block";
        }
    }

  return (
    <div className="row">
        <div className="col-md-4" style={{margin: '80px 155px'}}>
          <div className="card" style={{width: '30rem', border: '2px ridge black'}}>
            <div className="card-body">
                <center><button className="btn btn-outline-dark"  onClick={add_expence_page} style={{fontSize: "20px"}}>Add Expenses</button></center>
                <p></p><br/>
                <h4>EXPENSES </h4>
                <p></p><br/>
                <table className="table text-center" style={{borderTop: '1px solid black', padding:'1px 3px'}}>
                    <thead>
                        <tr>
                        <th scope="col">Amount</th>
                        <th scope="col">Category</th>
                        <th scope="col">Date</th>
                        <th scope="col">Note</th>
                        </tr>
                    </thead>
                </table>
            </div>
          </div>
          <form name='cartform' onSubmit={addExpense} className='container my-4' style={{border: '1px solid black', borderRadius:'6px', display:'none'}}>
            <div className='my-2'>
                <div className='my-2'><label>Amount: </label></div>
                <input type='text' className='form-input' id='amt' name='amount' placeholder='Amount'/>
            </div>
            <div className='my-2'>
                <div className='my-2' id='ctg'><label>Category: </label></div>
                <select className="form-select" aria-label="Default select example" name='category'>
                    <option>Category</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Others">Others</option>
                </select>
            </div>
            <div className='my-2'>
                <div className='my-2'><label>Date: </label></div>
                <input type='date' className='form-input' id='dt' name='date'/>
            </div>
            <div className='my-2'>
                <div className='my-2'><label>Note </label></div>
                <input type='text' className='form-input' id='nt' name='note' placeholder='Note'/>
            </div>
            <div className='my-2'>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
          </form>
        </div>
        <div className="col-md-4 offset-md-4" style={{margin: '80px 123px 80px 0px'}}>
            <div className="card" style={{width: '23rem', border: '2px ridge black'}}>
                <div className="card-body">
                    <center><h4><u>Categories</u></h4></center>
                    <p></p><br/>
                    <table className="table text-center" style={{borderTop: '1px solid black', padding:'1px 3px'}}>
                        <thead>
                            <tr>
                                <th scope="col">Category</th>
                                <th scope="col">Amount Spent</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Food</th>
                                <td>{food} Rs</td>
                            </tr>
                            <tr>
                                <th scope="row">Travel</th>
                                <td>{travel} Rs</td>
                            </tr>
                            <tr>
                                <th scope="row">Groceries</th>
                                <td>{groceries} Rs</td>
                            </tr>
                            <tr>
                                <th scope="row">Entertainment</th>
                                <td>{entertainment} Rs</td>
                            </tr>
                            <tr>
                                <th scope="row">Others</th>
                                <td>{others} Rs</td>
                            </tr>
                        </tbody>
                        <tbody style={{borderTop: '2px solid black'}}>
                            <tr>
                                <th scope="row">Total Expense</th>
                                <td>{sum} Rs</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Expenses



