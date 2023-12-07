import React from 'react';

const ClassList = () => {
  // Replace this with actual data fetching and rendering logic
  const classes = [
    { id: 1, title: 'Introduction to Web Development' },
    { id: 2, title: 'Yoga for Beginners' },
    // Add more class data
  ];

  return (
    <div>
      <h2>Available Classes</h2>
      <ul>
        {classes.map((cls) => (
          <li key={cls.id}>{cls.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClassList;

