class UserTable extends React.Component{
	constructor(props) {
		super(props);
		this.state = {checkedAll: ""}
		this.handleCheckAll = this.handleCheckAll.bind(this);
	}
	
	handleCheckAll(e){
		this.props.onCheckAll(e.target.checked);
		this.setState({checkedAll : e.target.checked})
	}
	
	render() {
		return (
		<div className="table-responsive">
			<table className="table table-bordered table-hover">
			<thead key="thead" className="thead-dark">
			  <tr key="thead row">
				<th key="checkbox">
					<input 
						type="checkbox" 
						checked={this.state.checkedAll} 
						onChange={this.handleCheckAll}
					/>
				</th>
				<th key="id">ID</th>
				<th key="Name">Name</th>
				<th key="Email">Email</th>
				<th key="Registration">Registration date</th>
				<th key="login">Last login date</th>
				<th key="State">State</th>
			  </tr>
			</thead>
			<tbody key="tbody">
				{this.props.users.map(
					user => <UserRecord key={user.id} user={user} 
						onCheckUser = {this.props.onCheckUser}
						onUncheckUser = {this.props.onUncheckUser}
					/>
				)}
			</tbody>
			</table>
		</div>
		)
	}
}