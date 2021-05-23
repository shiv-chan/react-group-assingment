import React from 'react';

class Comment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			name: this.props.name,
			email: this.props.email,
			body: this.props.body,
		};
	}

	handleEdit = () => {
		this.setState({
			isEditing: true,
		});
	};

	handleSave = (e) => {
		e.preventDefault();
		this.setState({
			isEditing: false,
		});
	};

	render() {
		return this.state.isEditing ? (
			<EditableFormRow
				handleChangeEmail={(e) => this.setState({ email: e.target.value })}
				handleChangeName={(e) => this.setState({ name: e.target.value })}
				handleChangeBody={(e) => this.setState({ body: e.target.value })}
				name={this.state.name}
				email={this.state.email}
				body={this.state.body}
				id={this.props.id}
				handleSave={this.handleSave}
			/>
		) : (
			<tr>
				<td />
				<td>{this.state.name}</td>
				<td>{this.state.email}</td>
				<td>{this.state.body}</td>
				<td>
					<button onClick={this.handleEdit}>Edit</button>
					<button onClick={() => this.props.handleDelete(this.props.id)}>
						Delete
					</button>
				</td>
			</tr>
		);
	}
}

export default Comment;

function EditableFormRow({
	handleChangeName,
	handleChangeEmail,
	handleChangeBody,
	name,
	email,
	body,
	id,
	handleSave,
}) {
	return (
		<tr>
			<td className="hidden">
				<form id={`form${id}`} onSubmit={handleSave} />
			</td>
			<td>
				<input
					form={`form${id}`}
					type="text"
					name="name"
					value={name}
					onChange={handleChangeName}
				/>
			</td>
			<td>
				<input
					form={`form${id}`}
					type="email"
					name="email"
					value={email}
					onChange={handleChangeEmail}
				/>
			</td>
			<td>
				<input
					form={`form${id}`}
					type="text"
					name="body"
					value={body}
					onChange={handleChangeBody}
				/>
			</td>
			<td className="buttons">
				<button className="save" form={`form${id}`} type="submit">
					Save
				</button>
			</td>
		</tr>
	);
}
