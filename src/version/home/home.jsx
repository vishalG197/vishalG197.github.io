import { Badge, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [creativeMessage, setCreativeMessage] = useState('');
  const message = 'Full-stack Web Developer | MERN Stack';

  useEffect(() => {
    let currentIndex = 0;
    let interval = setInterval(() => {
      setCreativeMessage((prevCreativeMessage) => {
        const nextCharacter = message[currentIndex];
        if (nextCharacter) {
          currentIndex++;
          return prevCreativeMessage + nextCharacter;
        } else {
          clearInterval(interval);
          return prevCreativeMessage;
        }
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

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

  return (
    <section id="home">
      <img
        className="home-img"
        src={userData?.avatar_url}
        alt="Vishal Giri"
        style={{ transform: 'rotate(10deg)' }}
      />
      <Badge>{userData?.status === 'online' ? 'Online' : 'Offline'}</Badge>
      <Text as="h1" fontSize="3xl" fontWeight="bold" textAlign="center" mb={4}>
        <span style={{ color: '#3182CE' }}>Hello, I am</span>{' '}
        <Text as="span" color="#3182CE">
          Vishal Giri
        </Text>
      </Text>
      <CreativeText id="user-detail-intro">
        {creativeMessage && (
          <span>
            Hello, I am <span style={{ color: '#3182ce' }}>{creativeMessage}</span>
          </span>
        )}
      </CreativeText>
    </section>
  );
};

export default Home;

const CreativeText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #3182ce;
  margin-top: 24px;
  margin-bottom: 16px;
`;