import React from 'react';

const RepositoryDetails = ({ match }) => {
  const repoId = match.params.id; 


  return (
    <div>
      <h2>Repository Details</h2>
      <p>Repository ID: {repoId}</p>
    </div>
  );
};

export default RepositoryDetails;