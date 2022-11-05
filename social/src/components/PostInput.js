import React, { Component } from 'react'

export default class PostInput extends Component {

constructor(props)
{
    super(props)
    this.state={
        post: ''
    }
}

write(e){
    this.setState({
        post:  e.target.value
    })
} 


add(e)
{

    e.preventDefault();
    console.log(this.state.post)
    this.setState({post : ""})
}
  render() {
    return (

<div className="card card-body my-3">
<form onSubmit={this.handleSubmit}>
        <label>
          <textarea className = 'rounded'  cols="100"  rows="6" placeholder="Write What you think" item={this.state.item} onChange={this.write.bind(this)} value={this.state.post} />
        </label>
      </form>
      <button type='submit' onClick={this.add.bind(this)} a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Add Post</button>

        </div>
    
    )
  }
}
