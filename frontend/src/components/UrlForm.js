import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const UrlForm = ({ addUrl }) => {
  const [formData, setFormData] = useState({
    originalUrl: '',
  });

  const { originalUrl } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/urls', formData, {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });
      addUrl(res.data);
      setFormData({ originalUrl: '' });
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <Form onSubmit={onSubmit} className="mb-3">
      <Form.Group>
        <Form.Label>Original URL</Form.Label>
        <Form.Control type="url" name="originalUrl" value={originalUrl} onChange={onChange} required />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">Shorten URL</Button>
    </Form>
  );
};

export default UrlForm;
