
import React, { useState } from 'react'

export const Inventory = () => {
    const[price,setPrice]=useState(0);
    const[qty,setQty]=useState(0);
    const[total,setTotal]=useState(0);

    const[user,setUser]=useState([]);
    const[name,setName]=useState();
    const[sum,setSum]=useState();

    function Calculation(){
        user.push({name,price,qty,sum});

        const total = user.reduce((total,user)=>{
            total += Number(user.sum)
            return total
        },0);

        setTotal(total);
        setName('');
        setQty('');
        setPrice('');
        setSum('');

    }

    const handlePriceChange=(e)=>{
       const newPrice = parseFloat(e.target.value);
       if(!isNaN(newPrice)){
        setPrice(newPrice);
        calculateTotal(newPrice,qty);
       }
      
    }
    const handleQtyChange=(e)=>{
        const newQty = parseInt(e.target.value);
        if(!isNaN(newQty)){
         setQty(newQty);
         calculateTotal(price,newQty);

        }
       }
       const  calculateTotal=(price,qty)=>{
        const newTotal = price* qty;
        
            setSum(newTotal);
   
           };
           function refreshPage(){
            window.location.reload();
           }
       
  return (
    <>
    <div className='container-fluid bg-2 text-center'>
        <h2 className='bg-dark text-light m-3 p-2'>Inventory Management System</h2>
        <br />
        <div className='row'>

        <div className='col-sm-8 '>
        <h3 className='py-2'>Add products</h3>
            <table className='table table-bordered'>
           
            <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Amount</th>
                <th>Option</th>
            </tr>
            <tr>
                <td>
                    <input type="text" className='form-control' placeholder='item-name'
                    value={name} 
                    onChange={(e)=>{
                        setName(e.target.value)
                    }} />
                </td>
                <td>
                <input type="text" className='form-control' placeholder='enter price'
                value={price}
                onChange={
                    handlePriceChange
                } />
                </td>
                <td>
                <input type="text" className='form-control' placeholder='enter qty'
                 value={qty}
                 onChange={
                     handleQtyChange
                 } />
                </td>
                <td>
                <input type="text" className='form-control' placeholder='enter total'
                id='total_cost' name='total_cost' disabled 
                value={sum}/>
                </td>
                <td>
                    <button className='btn btn-success' type='button' onClick={Calculation}>Add</button>
                </td>
            </tr>
            </table>
           <h3>Products</h3>
           <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Amount</th>
                    
                </tr>
            </thead>
                 <tbody>
                    {user.map((row,index)=>(
                        <tr key={index}>
                            <td>{row.name}</td>
                            <td>{row.price}</td>
                            <td>{row.qty}</td>
                            <td>{row.sum}</td>
                        </tr>
                    ))}
                 </tbody>
           </table>

        </div>

        <div className='col-sm-4'>
            <div className='form-group' style={{alignItems:"left"}}>
                <h3>Total</h3>
                <input type="text" className='form-control'  required value={total}/>
                <br />
                <button type='button' className='btn btn-success' onClick={refreshPage}>
                    <span>Complete</span></button>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}
