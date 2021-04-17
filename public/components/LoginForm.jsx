class LoginForm extends React.Component{
	constructor(props) {
		super(props);
		this.state = {email: "", password: "", message: ""};
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	onChangeEmail(e) {
        this.setState({email: e.target.value});
    }
	
	onChangePassword(e) {
        this.setState({password: e.target.value});
    }
   
    handleSubmit(e) {
		e.preventDefault();
        fetch('login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({email: this.state.email, password: this.state.password})
		}).then(response => {
			if(response.redirected) {
				this.setState({message: ""})
				window.location.replace(response.url);
			}
			else if(!response.ok){
				response.text().then( text => {
					this.setState({message: text})
				})
			}
		});
    }
	  
	render() {
        return (
		<div>
			<h1>Login</h1>
            <form className="mb-2" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label>Email</label>
					<input 
						type="email" 
						name="emails" 
						required 
						value={this.state.email} 
						onChange={this.onChangeEmail}
						className="form-control form-control-lg"
					/>
				< /div>
				<div className="form-group">
					<label>Password</label>
					<input 
						type="password" 
						name="password" 
						required
						value={this.state.password} 
						onChange={this.onChangePassword}
						className="form-control form-control-lg"
					/>
				< /div>
				<p  className="text-danger">{this.state.message}</p>
				<input type="submit" value="Send" class="btn btn-primary"/>
			< /form>
			<a href='registration'>Don't have an account? Register</a>
			
		< /div>
        );
    }
}