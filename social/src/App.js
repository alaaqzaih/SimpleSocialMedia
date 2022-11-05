
// import './App.css';
import { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from 'uuid';
import PostInput from './components/PostInput';
import Listpost from './components/Listpost';
import Comments from './components/Comments';
import DisplayComments from './components/DisplayComments';
class App extends Component {
  // constructor(props)
  // {
  //     super(props)
  //     this.state={
  //         post: ''
          
  //     }
  // }
  
  // write(e){
  //     this.setState({
  //         post:  e.target.value
  //     })
  // } 
  
  
  // add(e)
  // {
  
  //     e.preventDefault();
  //     console.log(this.state.post)
  //     this.setState({post : ""})
  // }
//   clearList = () => {
    
// this.setState({
//   items:[]
// })
//    };


  // handleEdit = id => { 
  //   const filteredItem= this.state.items.filter(item => item.id !== id);
  //   const selectedItem = this.state.items.find(item=> item.id===id);
  //   this.setState({
  //     items :filteredItem,
  //     item : selectedItem.title,
  //     id : id,
  //     editItem: true
  //   });
    
  //   };

  // handleDelete = id => { 
  //  const filteredItem= this.state.items.filter(item => item.id !== id);
  //   this.setState({
  //     items :filteredItem
  //   })
  // }

  render(){
    // console.log(this.state);
  return (

        
      <div className="container">
        <div className="row">
       <div className="col-10 mx-auto col-md-8 mt-3">
{/* <h3 className='text-capatlize text-center'> My social Site</h3> */}
<div></div>
<PostInput/>
<Listpost post =" hi there"/>
<Comments />
<DisplayComments />

{/* <TodoList items={this.state.items}  /> */}
       </div>
 
        </div>
      </div>
    
  );
}
}

export default App;
