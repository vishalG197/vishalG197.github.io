import React from 'react';
import { Box, Flex, Text, Link, Icon, Grid, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import styled from 'styled-components';
import Shopexpress from '../Images/shopExpress.png';
const ProjectCard = styled(motion.div)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
   
  }
`;

const ProjectImage = styled(motion.img)`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: all 0.5s ease;
`;

const ProjectOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const ProjectContent = styled(Box)`
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TechStack = styled(Text)`
  display: inline-block;
  background: #3182ce;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  margin: 0.5rem 0;
  font-size: 0.9rem;
`;

const IconButton = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #3182ce;
  color: white;
  margin: 0 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #2c5282;
    transform: scale(1.1);
  }
`;

const projects = [
  {
    id: 1,
    title: 'shopExpress.com',
    description: 'An e-commerce website that enables users to browse, select, and purchase products or services. It provides a convenient and efficient way for customers to shop from the comfort of their homes.',
    tech_stack: ['HTML', 'CSS', 'JavaScript', 'json-server'],
    imageUrl: Shopexpress,
    deploymentLink: 'https://shopexpress.pages.dev/',
    githubLink: 'https://github.com/vishalG197/tropical-shirt-6872',
  },
  {
    id: 4,
    title: 'preciouscharms.com',
    description: 'Precious Charms is an e-commerce website specializing in jewelry, watches, and accessories. Users can easily browse a wide range of products, utilizing filters by category and brand and sorting options based on price.',
    tech_stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'TypeScript', 'Styled-Components'],
    imageUrl: "https://camo.githubusercontent.com/78d9ba999ccb726d66d2707e3f7320b3f0e65cf0cf18accc72a09a3ecd47c227/68747470733a2f2f692e706f7374696d672e63632f68507a32795154442f486f6d652e6a7067",
    deploymentLink: 'https://shocking-grade-9442.pages.dev/',
    githubLink: 'https://github.com/vishalG197/shocking-grade-9442',
  },
  {
    id: 2,
    title: 'SkillVintage.com',
    description: 'The SkillVantage full stack App is a modern web application designed to explore diverse subjects, and advance your career. Experience a world of knowledge with our vast collection of courses, just like Coursera.',
    tech_stack: ['React', 'Redux', 'Express.js', 'Node.js', 'MongoDB', 'JWT', 'bcrypt'],
    imageUrl: "https://i.ibb.co/xzxYqSB/Landing-Page.png",
    deploymentLink: 'https://skillvantage.netlify.app/',
    githubLink: 'https://github.com/vishalG197/skillVintage',
  },
  {
    id: 3,
    title: 'attireguru.com',
    description: 'An e-commerce website that enables users to browse, select, and purchase products or services. It provides a convenient and efficient way for customers to shop from the comfort of their homes.',
    tech_stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'TypeScript', 'Styled-Components'],
    imageUrl: "https://user-images.githubusercontent.com/121215502/246683711-2d630738-872d-4d61-a5a4-7f37ee31c839.png",
    githubLink: 'https://github.com/vishalG197/attire_guru',
    deploymentLink: 'https://attire-guru.netlify.app/',
  },
];

const Project = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3
      }
    }
  };
  

  return (
    <Box py={16} id="projects" bg={useColorModeValue('#f5f7fa', '#c3cfe2')}>
      <Flex direction="column" align="center" maxW="7xl" mx="auto" px={4}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Text
            as="h2"
            fontSize="4xl"
            fontWeight="bold"
            color="#3182CE"
            mb={8}
            textAlign="center"
          >
            Featured Projects
          </Text>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ width: '100%' }}
        >
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
            gap={8}
            justifyItems="center"
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                variants={cardVariants}
                bgColor={bgColor}
                whileHover={{ y: -10 }}
              >
                <Box position="relative" overflow="hidden">
                  <ProjectImage
                    src={project.imageUrl}
                    alt={project.title}
                    variants={imageVariants}
                    whileHover="hover"
                  />
                  <ProjectOverlay
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <Flex gap={4}>
                      <Link href={project.deploymentLink} isExternal>
                        <IconButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Icon as={FiExternalLink} boxSize={5} />
                        </IconButton>
                      </Link>
                      <Link href={project.githubLink} isExternal>
                        <IconButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Icon as={AiFillGithub} boxSize={5} />
                        </IconButton>
                      </Link>
                    </Flex>
                  </ProjectOverlay>
                </Box>

                <ProjectContent>
                  <Box>
                    <Text
                      fontSize="xl"
                      fontWeight="bold"
                      mb={3}
                      color={textColor}
                    >
                      {project.title}
                    </Text>
                    <Text mb={4} color={textColor}>
                      {project.description}
                    </Text>
                    <Flex flexWrap="wrap" gap={2}>
                      {project.tech_stack.map((tech, index) => (
                        <TechStack key={index}>
                          {tech}
                        </TechStack>
                      ))}
                    </Flex>
                  </Box>
                </ProjectContent>
              </ProjectCard>
            ))}
          </Grid>
        </motion.div>
      </Flex>
    </Box>
  );
};

export default Project;