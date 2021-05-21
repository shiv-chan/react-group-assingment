function Comment(props) {
	function deleteComment(e) {
		e.preventDefault();
		props.handleDelete(props.id);
	}

	return (
		<tr>
			<td>{props.name}</td>
			<td>{props.email}</td>
			<td>{props.body}</td>
			<td>
				<button onClick={deleteComment}>Delete</button>
			</td>
		</tr>
	);
}

export default Comment;
