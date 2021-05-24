import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
	state = {
		comments: null,
	};
	
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/comments')
			.then((response) => response.json())
			.then((data) =>
				this.setState({
					comments: data,
				})
			)
			.catch((error) => console.error('There is an error:' + error));
	}

	handleDelete = (id) => {
		let updatedComments = [...this.state.comments].filter((c) => c.id !== id);
		this.setState({
			comments: updatedComments,
		});
	}

	render() {
		return (
			this.state.comments && (
				<table>
					<thead>
						<tr>
							<th className="hidden"/>
							<th>Name</th>
							<th>Email</th>
							<th>Comment</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{this.state.comments.map((comment) => (
							<Comment
								key={comment.id}
								id={comment.id}
								name={comment.name}
								email={comment.email}
								body={comment.body}
								handleDelete={this.handleDelete}
							/>
						))}
					</tbody>
				</table>
			)
		);
	}
}

export default CommentList;
