import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SubCategoriesComponent() {
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:1337/sub_categories') // Replace 'sub-categories' with the actual endpoint URL
      .then((response) => {
        setSubCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Sub Categories</h1>
      <ul>
        {subCategories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SubCategoriesComponent;
