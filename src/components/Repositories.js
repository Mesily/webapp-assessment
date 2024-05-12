import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner, Text, Flex, Input } from '@chakra-ui/react';

const Repositories = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/Mesily/repos');
        setRepos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepos();
  }, []);

  const filteredRepos = repos.filter(repo => {
    return repo.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (loading) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        margin="auto"
        mt="40vh"
      />
    );
  }

  return (
    <>
      <Flex justifyContent="flex-end" mb="4">
        <Input
          type="text"
          placeholder="Search by repository name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </Flex>
      {filteredRepos.map(repo => (
        <Text key={repo.id} fontSize="lg">{repo.name}</Text>
      ))}
    </>
  );
};

export default Repositories;
