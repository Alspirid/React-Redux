import React from 'react';


// const todoForm = (receiveTodo) => {
//   return (
//
//   )
// };

class todoForm extends React.Component {
  constructor(props) {
    super(props);

    const initialState = {
      title: '',
      body: '',
      done: false
    };

    this.state = initialState;
    this.addTodo = this.addTodo.bind(this);

  }


    // linkState(key) {
    //   return (event => this.setState({[key]: event.currentTarget.value}));
    // }

    setProperty(propertyName, e) {
      e.preventDefault();
      let newValue = e.target.value;
      this.setState({
        [propertyName]: newValue
      });
    }

    uniqueId() {
      return new Date().getTime();
    }

    addTodo(e){
      e.preventDefault();
      this.props.createTodo(this.state);
      console.log(this.state);
    }


    render() {
      return (<form className="form" onSubmit={this.addTodo}>
        <label>Title
          <input type="text" onChange={(e) => this.setProperty('title', e)} value={this.state.title} />
          </label>
        <label>Body
          <input type="text" onChange={(e) => this.setProperty('body', e)} value={this.state.body}  />
          </label><br/>
        <label>Done
          <input checked='false' type="checkbox" onChange={(e) => this.setProperty('done', e)} value={this.state.done}  />
          </label><br/>
        <input type="submit" name="submit" value="Submit" />
      </form>
    );}
  }



export default todoForm;
