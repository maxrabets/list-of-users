class Menu extends React.Component{
	constructor(props) {
		super(props);		 
		this.state = {
			users: []
		}
		this.updateUsers = this.updateUsers.bind(this);
		this.deleteUsers = this.deleteUsers.bind(this);
		this.blockUsers = this.blockUsers.bind(this);
		this.unblockUsers = this.unblockUsers.bind(this);
		this.checkUser = this.checkUser.bind(this);
		this.uncheckUser = this.uncheckUser.bind(this);
		this.checkAll = this.checkAll.bind(this);
		this.uncheckAll = this.uncheckAll.bind(this);
		this.updateUsers();
    };
	
	async getAllUsers(){
		let response = await fetch('getAllUsers', {redirect: 'follow'});
		console.log('getAllUsers')
		if(response.redirected) {
			window.location.replace(response.url);
		}
		if (response.ok) {
			let users = await response.json();
			console.log("get all" + users);
			return users;
		}
	}
	
	updateUsers(){
		console.log("update")
		this.getAllUsers().then(usersFromServer => {
			console.log("update2")
			usersFromServer.forEach(user => user.checked = false)
			this.setState({users: usersFromServer});
		});
	}
	
	deleteUsers(){
		fetch('deleteUsers', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
			redirect: 'follow',
			body: JSON.stringify(this.state.users.filter(user => user.checked))
		}).then(response => {
			if(response.redirected) {
				window.location.replace(response.url);
			}
			this.updateUsers();
		});
	}
	
	blockUsers(){
		fetch('blockUsers', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			redirect: 'follow',
			body: JSON.stringify(this.state.users.filter(user => user.checked))
		}).then(response => {
			if(response.redirected) {
				window.location.replace(response.url);
			}
			this.updateUsers();
		});
	}
	
	unblockUsers(){
		fetch('unblockUsers', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			redirect: 'follow',
			body: JSON.stringify(this.state.users.filter(user => user.checked))
		}).then(response => {
			if(response.redirected) {
				window.location.replace(response.url);
			}
			this.updateUsers();
		});
	}
	
	checkUser(user, checked){
		let newUsers = this.state.users.slice();
		let i = newUsers.indexOf(user);
		newUsers[i].checked = checked;
		this.setState({users : newUsers})
		
	}
	
	uncheckUser(user){		
		let newUsers = this.state.users.slice();
		let i = newUsers.indexOf(user);
		newUsers[i].checked = false;
		this.setState({users : newUsers})
	}
	
	checkAll(checked){
		this.state.users.forEach(user => this.checkUser(user, checked))
	}
	
	uncheckAll(){
		this.setState({users : this.state.users.map(user => user.checked=false)})
	}
	
	render(){ 
		console.log("render"+this.state.users)
		return(
		<div>
			<ToolBar onDelete={this.deleteUsers} onBlock={this.blockUsers} onUnblock={this.unblockUsers}/>
			<UserTable 
				users={this.state.users} 
				onCheckUser={this.checkUser} 
				onUncheckUser={this.checkUser} 
				onCheckAll={this.checkAll} 
				onUncheckAll={this.uncheckAll} 			
			/>
		</div>
	)}
}