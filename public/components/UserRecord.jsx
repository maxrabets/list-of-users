class UserRecord extends React.Component{
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e){
		this.props.onCheckUser(this.props.user, e.target.checked);
	}
	
	render(){ 
	return <tr key={this.props.user.id}>
		<td key="checkbox td"><input key="checkbox" 
			type="checkbox" 
			checked={this.props.user.checked} 
			onChange={this.handleChange}/></td>
		<td key="id">{this.props.user.id}</td>
		<td key="name">{this.props.user.name}</td>
		<td key="email">{this.props.user.email}</td>
		<td key="registrationDate">{this.props.user.registrationDate}</td>
		<td key="lastLoginDate">{this.props.user.lastLoginDate}</td>
		<td key="state">{this.props.user.state}</td>
	</tr>;
	}
}