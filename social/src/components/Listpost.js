import React, { Component } from 'react'
export default class Listpost extends Component {
    constructor({post})
    {
        super(post)
        this.state={
            post: post
        }
    }
  render() {
    return (
        
   <ul className='list-group '>
    <li className='list-group-item text-capitalize d-flex justify-content-between my-5 shadow p-3 mb-5 bg-white rounded'>
    {this.state.post}

        {/* <h6>{this.state.post}</h6> */}
        <div className='todo-icon'>
        <button type='submit' class="btn  btn-primary "  > Like</button>
        <button type='submit' class="btn btn-secondary " > Comment</button>

            {/* <span className='mx-2 text-success' onClick={handleEdit}>
                <i className='fas fa-pen' />
            </span>
            <span className='mx-2 text-success' onClick={handleDelete}>
                <i className='fas fa-trash' />
            </span> */}
        </div>
    </li>

    {/* {items.map(item => {
        return(
            <TodoItem key={item.id} title={item.title} 
            handleDelete={()=> handleDelete(item.id)}
            handleEdit={()=> handleEdit(item.id)}
/>
        );
    })} */}
    {/* <button type='button ' className='btn btn-danger btn block text-uppercase mt-5' onClick={clearList}>Clear</button> */}
   </ul>    

   )
  }
}