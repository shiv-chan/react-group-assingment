function Comment(props) {
	return (
		<tr>
			<td>{props.name}</td>
			<td>{props.email}</td>
			<td>{props.body}</td>
			<td>
				<button onClick={() => props.handleDelete(props.id)}>Delete</button>
			</td>
		</tr>
	);
}

export default Comment;
