import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

class GetOneUser extends React.Component {
	constructor(props) {
		super(props);
		this.URL = "https://john-cs8-hairschool.herokuapp.com";
		this.state = {
			user: {
        firstname:"john",
				username: ""
			}
		};
	}

	componentWillMount() {
		const token = "token " + localStorage.getItem("auth_token");
    axios.defaults.headers.common["Authorization"] = token;
    
		axios
			.get(`${this.URL}/hairschool/rest-auth/user/`)
			.then(res => {
        this.setState({ user: { username: res.data.username } });
        console.log(this.state.user)
        localStorage.setItem("user", this.state.user);
			})
			.catch(err => {
				console.log("error", err);
			});
	}

	render() {
		return (
			<div className="getOneUser">Welcome, {this.state.user.username}</div>
		);
	}
}

export default GetOneUser;
