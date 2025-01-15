import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log("child " + this.props.name + "constructor called");

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };

    // console.log(props);
  }

  async componentDidMount() {
    // console.log("child " + this.props.name + " component mounted");
    const data = await fetch("https://api.github.com/users/bramstroker");
    const json = await data.json();
    // console.log(json);

    this.setState({
      userInfo: json,
    });
    
  }

  componentDidUpdate(){
    // //to update on change of some other value
    // if(
    //   this.state.count !== prevState.count ||
    //   this.state.count !== prevState.count
    // ) 
    // console.log("component did update");
  }

  componentWillUnmount() {
    // console.log("component will unmount");
  }

  render() {
    // console.log("child " + this.props.name + " rendered");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h1>Name: {name}</h1>
        {/* <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          increase count
        </button> */}
        <h2>Location: {location}</h2>
        <h2>Contact: 9245678407 </h2>
      </div>
    );
  }
}

export default UserClass;
