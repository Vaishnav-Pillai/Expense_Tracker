import React from 'react'

function Category(props) {
  return (
    <div>
      <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
            <center><a href="/Categoryadd" className="btn btn-primary">Add Category</a></center>
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
                        <td>{props.expensePerCategory[0]} Rs</td>
                    </tr>
                    <tr>
                        <th scope="row">Travel</th>
                        <td>{props.expensePerCategory[1]} Rs</td>
                    </tr>
                    <tr>
                        <th scope="row">Groceries</th>
                        <td>{props.expensePerCategory[2]} Rs</td>
                    </tr>
                    <tr>
                        <th scope="row">Entertainment</th>
                        <td>{props.expensePerCategory[3]} Rs</td>
                    </tr>
                    <tr>
                        <th scope="row">Others</th>
                        <td>{props.expensePerCategory[4]} Rs</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default Category