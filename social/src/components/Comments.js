import React, { Component } from 'react'

export default class Comments extends Component {

constructor(props)
{
    super(props)
    this.state={
        comment: ''
    }
}

writeComment(e){
    this.setState({
        post:  e.target.value
    })
} 


// add(e)
// {

//     e.preventDefault();
//     console.log(this.state.post)
//     this.setState({post : ""})
// }
  render() {
    return (

<div className="card card-body ">
<form onSubmit={this.handleSubmit}>
        <label>
          <textarea  className = 'rounded ' cols="100"  rows="3" placeholder="Write comment" comment={this.state.comment} onChange={this.writeComment.bind(this)} value={this.state.comment} />
          <button type='submit' class="btn btn-secondary " > Add Comment</button>

        </label>
      </form>

        </div>
    
    )
  }
}
