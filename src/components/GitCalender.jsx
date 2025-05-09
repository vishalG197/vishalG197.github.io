import React from 'react';
import {
  Box,
  Stack,
  Text,
  useColorModeValue,
  Flex,
  Image,
  Container,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledContainer = styled(motion.div)`
  padding: 1rem;
  @media (min-width: 768px) {
    padding: 2rem;
  }
  margin: 0 auto;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);

`;

const StatsCard = styled(motion.div)`

  border-radius: 20px;
  padding: 2rem;
  
  transition: all 0.3s ease;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;

  &:hover {
    transform: translateY(-5px);
    // box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: auto;
    min-height: 250px;
    object-fit: contain;
    transform: scale(1.2);
  }
`;

const CalendarContainer = styled(motion.div)`
  border-radius: 20px;
  padding: 2rem;
  // box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
  overflow: hidden;
  max-width: 1800px;
  margin-left: auto;
  margin-right: auto;

  img {
    width: 100%;
    height: auto;
    min-height: 200px;
  }
`;

const SectionTitle = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
`;

const StatsContainer = styled(Flex)`
  flex-direction: column;
  gap: 3rem;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3rem;
  }
  margin-bottom: 3rem;
  width: 100%;
  padding: 0 1rem;
`;

const Github = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <StyledContainer>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionTitle variants={itemVariants}>
          <Text
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="bold"
            color="#3182ce"
            mb={4}
          >
            GitHub Activity
          </Text>
        </SectionTitle>

        <CalendarContainer
          variants={itemVariants}
          bgColor={bgColor}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="https://ghchart.rshah.org/vishalG197"
            alt="GitHub Contributions"
            w="100%"
            borderRadius="10px"
            transition="all 0.3s ease"
            _hover={{ transform: 'scale(1.02)' }}
          />
        </CalendarContainer>

        <SectionTitle variants={itemVariants}>
          <Text
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="bold"
            color="#3182ce"
            mb={4}
          >
            GitHub Statistics
          </Text>
        </SectionTitle>

        <StatsContainer>
          <StatsCard
            variants={itemVariants}
            bgColor={bgColor}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            flex="1"
          >
            <Image
              src="https://github-readme-stats.vercel.app/api?username=vishalG197&show_icons=true&locale=en&theme=tokyonight&hide_border=true&include_all_commits=true&count_private=true&custom_title=GitHub%20Stats&card_width=500"
              alt="GitHub Stats"
              borderRadius="10px"
            />
          </StatsCard>

          <StatsCard
            variants={itemVariants}
            bgColor={bgColor}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            flex="1"
          >
            <Image
              src="https://github-readme-streak-stats.herokuapp.com/?user=vishalG197&theme=tokyonight&hide_border=true&custom_title=Contribution%20Streak&card_width=500"
              alt="GitHub Streak"
              borderRadius="10px"
            />
          </StatsCard>

          <StatsCard
            variants={itemVariants}
            bgColor={bgColor}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            flex="1"
          >
            <Image
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=vishalG197&layout=compact&theme=tokyonight&hide_border=true&custom_title=Most%20Used%20Languages&card_width=500"
              alt="Top Languages"
              borderRadius="10px"
            />
          </StatsCard>
        </StatsContainer>
      </motion.div>
    </StyledContainer>
  );
};

export default Github;
