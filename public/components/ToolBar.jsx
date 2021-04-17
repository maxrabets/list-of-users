class ToolBar extends React.Component{
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
		<div className="btn-toolbar mb-2 mt-2 btn-group-xs" role="toolbar" aria-label="Toolbar">
			<button className="btn btn-secondary mr-1 " onClick={this.props.onBlock}>Block</button>
			<button className="btn btn-secondary mr-1" onClick={this.props.onUnblock}>
				<img src="images/unblock.png" className="img-fluid" alt="Unblock"/>
			</button>
			<button className="btn btn-secondary mr-1" onClick={this.props.onDelete}>
				<img src="images/delete.png" alt="Delete"/>
			</button>
		</div>
		)
	}
}
