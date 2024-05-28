import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UrlList from './UrlList';
import UrlForm from './UrlForm';
import { Container, Button } from 'react-bootstrap';

const Dashboard = ({ setAuth }) => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      const res = await axios.get('/api/urls', {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });
      setUrls(res.data);
    };
    fetchUrls();
  }, []);

  const addUrl = url => setUrls([...urls, url]);
  const updateUrl = updatedUrl => setUrls(urls.map(url => (url._id === updatedUrl._id ? updatedUrl : url)));
  const deleteUrl = id => setUrls(urls.filter(url => url._id !== id));

  const logout = () => {
    localStorage.removeItem('token');
    setAuth(false);
  };

  return (
    <Container>
      <h2 className="text-center">URL Management Dashboard</h2>
      <Button variant="danger" onClick={logout} className="mb-3">Logout</Button>
      <UrlForm addUrl={addUrl} />
      <UrlList urls={urls} updateUrl={updateUrl} deleteUrl={deleteUrl} />
    </Container>
  );
};

export default Dashboard;
