import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaDatabase, FaServer, FaCode, FaLaptopCode, FaMobile, FaShoppingCart, FaStore, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiRemix, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { Button, Text } from '@chakra-ui/react';
import { FiDownload } from 'react-icons/fi';
import resume from "../Vishal-Giri-Resume.pdf"
import download from 'downloadjs';

const StyledHome = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const Avatar = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid #3182ce;
  margin-bottom: 16px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const UserInfoWrapper = styled(motion.div)`
  text-align: center;
  margin-bottom: 16px;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  backdrop-filter: blur(4px);
`;

const Badge = styled(motion.span)`
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 4px;
  color: white;
  font-size: 14px;
  font-weight: bold;
`;

const BadgeGreen = styled(Badge)`
  background-color: #ea5a69;
`;

const BadgeRed = styled(Badge)`
  background-color: #53d170;
`;

const BioText = styled(motion.p)`
  color: #2d3748;
  margin-bottom: 8px;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const StackWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin: 2rem 0;
  padding: 1rem;
`;

const StackButton = styled(motion.button)`
  border: none;
  background-color: #f0f0f0;
  padding: 12px 20px;
  border-radius: 24px;
  color: #3182ce;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: #3182ce;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const DownloadButton = styled(motion.a)`
  display: flex;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: white;
  background-color: #3182ce;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(49, 130, 206, 0.3);
  
  &:hover {
    background-color: #2b6cb0;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(49, 130, 206, 0.4);
  }
`;

const Heading = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 4px;
`;

const SubHeading = styled.p`
  color: #555;
  margin-bottom: 16px;
`;

const CreativeText = styled(motion.p)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #3182ce;
  margin-top: 24px;
  margin-bottom: 16px;
  text-align: center;
`;

const Home = () => {
  const [creativeMessage, setCreativeMessage] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = [
    'Full-stack Web Developer',
    'React Developer',
    'Backend Developer',
    'MERN Stack Developer',
    'UI/UX Enthusiast',
    'Problem Solver'
  ];
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    let currentIndex = 0;
    let currentRole = roles[currentRoleIndex];
    let typingInterval;
    let deletingInterval;
    setCreativeMessage("");

    const typeText = () => {
      typingInterval = setInterval(() => {
        setCreativeMessage((prevCreativeMessage) => {
          const nextCharacter = currentRole[currentIndex];
          if (nextCharacter) {
            currentIndex++;
            return prevCreativeMessage + nextCharacter;
          } else {
            clearInterval(typingInterval);
            // Wait before starting to delete
            setTimeout(() => {
              deleteText();
            }, 2000);
            return prevCreativeMessage;
          }
        });
      }, 100);
    };

    const deleteText = () => {
      deletingInterval = setInterval(() => {
        setCreativeMessage((prevCreativeMessage) => {
          if (prevCreativeMessage.length > 0) {
            return prevCreativeMessage.slice(0, -1);
          } else {
            clearInterval(deletingInterval);
            // Move to next role
            setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
            return "";
          }
        });
      }, 50);
    };

    typeText();

    return () => {
      clearInterval(typingInterval);
      clearInterval(deletingInterval);
    };
  }, [currentRoleIndex]);
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/VishalG197');
       console.log(response)
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return null;
  }

  const handleDownloads = async () => {
    try {
      const link = document.createElement('a');
      link.href = "https://drive.google.com/uc?export=download&id=1CaLiqqA5o7dmyjhlEM-PFOgzkekuY1qi";
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      window.open("https://drive.google.com/file/d/1CaLiqqA5o7dmyjhlEM-PFOgzkekuY1qi/view?usp=drive_link", "_blank");
      link.click();
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  const stack = [
    { name: 'MongoDB', icon: FaDatabase },
    { name: 'Express.js', icon: FaServer },
    { name: 'React.js', icon: FaReact },
    { name: 'Node.js', icon: FaLaptopCode },
    { name: 'React Native', icon: FaMobile },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Remix', icon: SiRemix },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'E-commerce B2C', icon: FaShoppingCart },
    { name: 'E-commerce B2B', icon: FaStore },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <StyledHome
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Avatar
        src={userData.avatar_url}
        alt="User Avatar"
        className="home-img"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        whileHover={{ 
          scale: 1.1,
          rotate: 5,
          transition: { duration: 0.3 }
        }}
      />
      <UserInfoWrapper
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <BadgeRed
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          {userData.site_admin ? 'Admin' : 'User'}
        </BadgeRed>
        <BadgeGreen
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          {userData.status == 'online' ? 'Online' : 'Offline'}
        </BadgeGreen>
        <Text
          as="h1"
          fontSize="3xl"
          fontWeight="bold"
          textAlign="center"
          mb={4}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Hello, I am{' '}
          <Text as="span" color="#3182CE">
            Vishal Giri.
          </Text>
        </Text>
        <CreativeText
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
         
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              I am a{' '}
              {creativeMessage && ( <motion.span
                style={{ color: '#3182ce' }}
                animate={{
                  color: ['#3182ce', '#2b6cb0', '#2c5282', '#3182ce'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {creativeMessage}
              </motion.span>  )}
            </motion.span>
        
        </CreativeText>
        <BioText
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {userData.bio}
        </BioText>
        <StackWrapper
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stack.map((item, index) => (
            <StackButton
              key={index}
              className="skills-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon /> {item.name}
            </StackButton>
          ))}
        </StackWrapper>
      </UserInfoWrapper>
      <DownloadButton
        as={motion.button}
        onClick={handleDownloads}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <FiDownload style={{ marginRight: '8px' }} />  Resume
      </DownloadButton>
      <Text
        as="p"
        mt={4}
        fontSize="lg"
        color="gray.600"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        Let's build something amazing together! 🌟
      </Text>
    </StyledHome>
  );
};

export default Home;