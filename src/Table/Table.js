import React, { Component } from "react";
import BSTable from "react-bootstrap/Table";

class Table extends Component {
	render() {
		return (
			<BSTable striped bordered hover>
				<thead>
					<tr>
						<th>Message</th>
						<th>Duration</th>
					</tr>
				</thead>
				<tbody>
					{this.props.records.map(record => (
						<tr key={record.id}>
							<td>{record.message}</td>
							<td>{record.duration}</td>
						</tr>
					))}
				</tbody>
			</BSTable>
		);
	}
}

export default Table;
