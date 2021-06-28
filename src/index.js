import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const FileList = ({ files }) => (
	<table className='file-list'>
		<tbody>
			{files.map((file) => (
				<FileListItem key={file.id} file={file} />
			))}
		</tbody>
	</table>
);

const FileListItem = ({ file }) => (
	<tr className='file-list-item'>
		<td className='file-name'>{file.name}</td>{" "}
	</tr>
);

const testFiles = [
	{
		id: 1,
		name: "src",
		type: "folder",
		updated_at: "2016-07-11 21:24:00",
		latestCommit: {
			message: "Initial commit",
		},
	},
	{
		id: 2,
		name: "tests",
		type: "folder",
		updated_at: "2016-07-11 21:24:00",
		latestCommit: {
			message: "Initial commit",
		},
	},
	{
		id: 3,
		name: "README",
		type: "file",
		updated_at: "2016-07-18 21:24:00",
		latestCommit: {
			message: "Added a readme",
		},
	},
];

ReactDOM.render(<FileList files={testFiles} />, document.querySelector("#root"));

FileList.propTypes = {
	files: PropTypes.array,
};

FileListItem.propTypes = {
	file: PropTypes.object.isRequired,
};
