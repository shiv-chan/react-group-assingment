import React from 'react';

class Comment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editComment: false,
			name: this.props.name,
			email: this.props.email,
			body: this.props.body,
		};
	}

	handleSave = (e) => {
		e.preventDefault();
		this.setState({
			editComment: false,
		});
	};

	render() {
		return this.state.editComment ? (
			<tr>
				<td className="hidden">
					<form id={`form${this.props.id}`} onSubmit={this.handleSave} />
				</td>
				<td>
					<input
						form={`form${this.props.id}`}
						type="text"
						name="name"
						value={this.state.name}
						onChange={(e) => this.setState({ name: e.target.value })}
					/>
				</td>
				<td>
					<input
						form={`form${this.props.id}`}
						type="email"
						name="email"
						value={this.state.email}
						onChange={(e) => this.setState({ email: e.target.value })}
					/>
				</td>
				<td>
					<input
						form={`form${this.props.id}`}
						type="text"
						name="body"
						value={this.state.body}
						onChange={(e) => this.setState({ body: e.target.value })}
					/>
				</td>
				<td className="buttons">
					<button className="save" form={`form${this.props.id}`} type="submit">
						Save
					</button>{' '}
				</td>
			</tr>
		) : (
			<tr>
				<td />
				<td>{this.state.name}</td>
				<td>{this.state.email}</td>
				<td>{this.state.body}</td>
				<td>
					<button
						onClick={(e) => {
							e.preventDefault();
							this.setState({ editComment: true });
						}}
						type="button"
					>
						Edit
					</button>
					<button onClick={() => this.props.handleDelete(this.props.id)}>
						Delete
					</button>
				</td>
			</tr>
		);
	}
}

export default Comment;
