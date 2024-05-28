import React from 'react';
import { Table, Button } from 'react-bootstrap';

const UrlList = ({ urls, updateUrl, deleteUrl }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Short URL</th>
          <th>Original URL</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {urls.map(url => (
          <tr key={url._id}>
            <td><a href={`/${url.shortUrl}`} target="_blank" rel="noopener noreferrer">{url.shortUrl}</a></td>
            <td>{url.originalUrl}</td>
            <td>
              <Button variant="info" onClick={() => updateUrl(url)}>Edit</Button>
              <Button variant="danger" onClick={() => deleteUrl(url._id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UrlList;
