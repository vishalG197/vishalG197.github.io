import React, { useEffect, useState } from 'react';
import { Box, Text, Avatar, Badge, Flex, Wrap, WrapItem, Grid, GridItem, IconButton, Button, AvatarBadge } from '@chakra-ui/react';
import axios from 'axios';
import { FaDatabase, FaServer, FaCode, FaLaptopCode } from 'react-icons/fa';
const GitHubProfileCard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/VishalG197');
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return null; // Handle loading state
  }
  const stack = [
   { name: 'MongoDB', icon: FaDatabase },
   { name: 'Express.js', icon: FaServer },
   { name: 'React.js', icon: FaCode },
   { name: 'Node.js', icon: FaLaptopCode },
   { name: 'Redux', icon: FaCode },
   { name: 'HTML5', icon: FaCode },
   { name: 'CSS', icon: FaCode },
   { name: 'JavaScript', icon: FaCode },
 ];
//   const stack = ['MongoDB', 'Express.js', 'React.js', 'Node.js',"Redux", "HTML5" ,"CSS" ,"JavaScript"];

  return (
    <Box width="100%" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="md">
      {/* <Grid templateColumns="auto 1fr" columnGap={4} alignItems="center" mb={4}> */}
      <Avatar size="100px"  name={userData.name} src={userData.avatar_url}>
          {/* <AvatarBadge boxSize="2em" bg={userData.status === 'online' ? 'green.500' : 'red.500'} /> */}
        </Avatar>
        <Box>
        <Badge colorScheme={userData.site_admin ? 'red' : 'green'} mr={2}>
          {userData.site_admin ? 'Admin' : 'User'}
        </Badge>
        <Badge colorScheme={userData.status === 'online' ? 'green' : 'red'}>
              {userData.status === 'online' ? 'Online' : 'Offline'}
            </Badge>
          <Text fontSize="xl" fontWeight="bold" mb={1}>
            {userData.name}
          </Text>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
        Software Engineer
      </Text>
          <Badge colorScheme="blue" variant="subtle" mb={2}>
            {userData.location}
          </Badge>
        </Box>
      {/* </Grid> */}
      
      <Text color="gray.500" mb={4}>
        {userData.bio}
      </Text>
      <Wrap spacing={2} mb={2}>
      {stack.map((item) => (
          <WrapItem key={item.name}>
              <Button 
              variant='ghost'
              colorScheme='facebook' leftIcon={item.icon}>
    {item.name}
  </Button>
          </WrapItem>
        ))}
      </Wrap>
      <Flex align="center" mb={2}>
         </Flex>
    </Box>
  );
};

export default GitHubProfileCard;
