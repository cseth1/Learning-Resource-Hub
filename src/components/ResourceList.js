import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';

function ResourceList() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/resources');
        setResources(response.data);
      } catch (error) {
        console.error('Error fetching resources:', error);
      }
    };

    fetchResources();
  }, []);

  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        Learning Resources
      </Typography>
      <List>
        {resources.map((resource) => (
          <ListItem key={resource.id}>
            <ListItemText 
              primary={resource.title}
              secondary={`${resource.type} - ${resource.subject}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ResourceList;
