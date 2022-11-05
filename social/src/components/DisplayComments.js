import React, { Component } from 'react'

export default class DisplayComments extends Component {

constructor(props)
{
    super(props)
    this.state={
        comment: '',
        date: new Date().toLocaleString()
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
    <div>
    <p class="h4">The First comment for this post</p>
{this.state.date}
</div>
{/* <form onSubmit={this.handleSubmit}>
        <label>
          <textarea  cols="100"  rows="3" placeholder="Write comment" comment={this.state.comment} onChange={this.writeComment.bind(this)} value={this.state.comment} />
          <button type='submit' class="btn btn-secondary " > Add Comment</button>

        </label>
      </form> */}

        </div>
    
    )
  }
}
