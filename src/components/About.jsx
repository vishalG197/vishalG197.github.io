import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Text, Box, useColorModeValue } from '@chakra-ui/react';
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

const Container = styled(motion.div)`
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const AboutContent = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  backdrop-filter: blur(4px);
`;

const Avatar = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid #3182ce;
  margin-bottom: 2rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const CardContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  margin: 2rem auto;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Card = styled(motion.div)`
  flex: 1;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #3182ce;
  }
`;

const CardContent = styled.div`
  p {
    margin-bottom: 1rem;
    color: #4a5568;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const About = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');

  useEffect(() => {
    const animationDuration = 0.8;
    const animationDelay = 0.6;
    setTimeout(() => setAnimationComplete(true), (animationDuration + animationDelay) * 1000);
  }, []);

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
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AboutContent
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Text
          fontSize="4xl"
          fontWeight="bold"
          color="#3182ce"
          mb="2rem"
          textAlign="center"
          as={motion.h1}
          variants={itemVariants}
        >
          About Me
        </Text>

        <Box display="flex" justifyContent="center" mb="2rem">
          <Avatar
            src="https://avatars.githubusercontent.com/u/119415070?v=4"
            alt="Vishal Giri"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.3 }
            }}
          />
        </Box>

        <motion.div variants={itemVariants}>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            textAlign="center"
            mb="1rem"
            color={textColor}
          >
            Vishal Giri
          </Text>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Text
            fontSize="xl"
            textAlign="center"
            mb="2rem"
            color={textColor}
          >
            Full-stack Web Developer | MERN Stack
          </Text>
        </motion.div>

        {animationComplete && (
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Text
              fontSize="lg"
              textAlign="center"
              mb="2rem"
              color={textColor}
              lineHeight="1.8"
            >
             Results-driven Full Stack Developer with expertise in modern JavaScript frameworks and AI-enhanced
 development methodologies. Specialized in creating sophisticated e-commerce solutions with a keen eye
 for user experience and technical performance. Demonstrated ability to rapidly adapt to emerging
 technologies and deliver enterprise-grade applications in fast-paced environments. Passionate about
 leveraging cutting-edge tools to build scalable, responsive, and intuitive web applications.
            </Text>
          </motion.div>
        )}

        <CardContainer>
          <Card
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <CardHeader>
              <FaGraduationCap size={24} color="#3182ce" />
              <h2>Education</h2>
            </CardHeader>
            <CardContent>
              <p>Bachelor of Engineering in Civil Engineering</p>
              <p>Dr. BAMU, Sambhajinager</p>
              <p>Graduated: May 2018</p>
            </CardContent>
          </Card>

          <Card
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <CardHeader>
              <FaLaptopCode size={24} color="#3182ce" />
              <h2>Training</h2>
            </CardHeader>
            <CardContent>
              <p>Full Stack Web Development | MERN Stack</p>
              <p>Masai School</p>
              <p>Completed: October 2023</p>
            </CardContent>
          </Card>
        </CardContainer>
      </AboutContent>
    </Container>
  );
};

export default About;
