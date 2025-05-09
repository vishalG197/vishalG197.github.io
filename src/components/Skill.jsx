import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Box, Flex, Text, Grid, Tooltip, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const SkillSection = styled(Box)`
  padding: 40px;
  border-radius: 16px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
`;

const SkillHeader = styled(Text)`
  font-size: 32px;
  font-weight: bold;
  color: #3182ce;
  margin-bottom: 16px;
  text-align: center;
`;

const SkillsGrid = styled(Grid)`
  justify-items: center;
`;

const SkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 20px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const SkillImage = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 12px;
  border-radius: 15px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const SkillName = styled(Text)`
  font-weight: bold;
  color: #2d3748;
  font-size: 1.1rem;
`;

const Skill = () => {
  const technicalSkills = [
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Expo', logo: 'https://cdn.worldvectorlogo.com/logos/expo-1.svg' },
    { name: 'Remix', logo: 'https://vectorseek.com/wp-content/uploads/2023/06/Remix-Logo-Vector.jpg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Chakra UI', logo: 'https://img.icons8.com/color/48/000000/chakra-ui.png' },
    { name: 'Tailwind CSS', logo: 'https://img.icons8.com/color/48/000000/tailwindcss.png' },
    { name: 'Material UI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
    { name: 'Postman', logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Vendure', logo: 'https://img.stackshare.io/service/104931/default_0a067b56c0fcdd538b8401744e3768357c717216.png' },
    { name: 'Commerce Tools', logo: 'https://logos-world.net/wp-content/uploads/2024/06/Commercetools-Symbol.png' },
    { name: 'Emporix', logo: 'https://img.icons8.com/color/48/000000/shop.png' },
    { name: 'Algolia', logo: 'https://companieslogo.com/img/orig/algolia-89b7902c.png?t=1701404858&download=true' },
    { name: 'Typesense', logo: 'https://logowik.com/content/uploads/images/typesense2583.logowik.com.webp' },
    { name: 'Contentful', logo: 'https://i.pinimg.com/originals/c6/f2/cd/c6f2cd5e0ebf33ff1ae0b01d0407224c.png' },
    { name: 'Strapi', logo: 'https://th.bing.com/th/id/OIP.aY1RXpSRhjcfnAL0Ob436wHaHd?cb=iwc1&rs=1&pid=ImgDetMain' },
    { name: 'PayPal', logo: 'https://img.icons8.com/color/48/000000/paypal.png' },
    { name: 'Cloudflare', logo: 'https://companieslogo.com/img/orig/NET-6676335b.png?t=1647436387' }
  ];

  const softSkills = [
    { name: 'Communication', logo: 'https://cdn-icons-png.flaticon.com/512/2091/2091947.png' },
    { name: 'Teamwork', logo: 'https://cdn-icons-png.flaticon.com/512/476/476863.png' },
    { name: 'Problem-solving', logo: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png' },
    { name: 'Creativity', logo: 'https://cdn-icons-png.flaticon.com/512/1055/1055683.png' },
    { name: 'Adaptability', logo: 'https://cdn-icons-png.flaticon.com/512/1055/1055684.png' },
    { name: 'Time Management', logo: 'https://cdn-icons-png.flaticon.com/512/1055/1055685.png' },
    { name: 'Leadership', logo: 'https://cdn-icons-png.flaticon.com/512/1055/1055686.png' },
    { name: 'Critical Thinking', logo: 'https://cdn-icons-png.flaticon.com/512/1055/1055688.png' },
    { name: 'Attention to Detail', logo: 'https://cdn-icons-png.flaticon.com/512/1055/1055689.png' },
    { name: 'UI/UX Design', logo: 'https://cdn-icons-png.flaticon.com/512/1055/1055690.png' }
  ];

  const [isVisible, setIsVisible] = useState(false);
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      if (scrollY > windowHeight * 0.01) {
        setIsVisible(true);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const staggerVariants = {
    visible: { 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  return (
    <SkillSection py={8} w="100%">
      <Flex direction="column" align="center" w="100%" mx="auto">
        <SkillHeader as="h2" fontSize="4xl" fontWeight="bold" mb={8}>
          Skills & Expertise
        </SkillHeader>

        <SkillsGrid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={8} justifyItems="center">
          <Box id="skills" w="100%">
            <Text fontSize="2xl" fontWeight="bold" mb={6} color={textColor} textAlign="center">
              Technical Skills
            </Text>
            <Flex align="center" justify="center">
              <motion.div
                variants={staggerVariants}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                style={{ width: '100%' }}
              >
                <SkillsGrid 
                  templateColumns={{ 
                    base: 'repeat(2, 1fr)', 
                    md: 'repeat(3, 1fr)',
                    lg: 'repeat(4, 1fr)'
                  }} 
                  gap={6} 
                  justifyItems="center"
                >
                  {isVisible &&
                    technicalSkills.map((skill) => (
                      <SkillCard 
                        key={skill.name} 
                        variants={fadeInVariants} 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Tooltip 
                          label={skill.name} 
                          placement="top" 
                          hasArrow
                          bg="#3182ce"
                          color="white"
                        >
                          <SkillImage src={skill.logo} alt={skill.name} />
                        </Tooltip>
                        <SkillName>{skill.name}</SkillName>
                      </SkillCard>
                    ))}
                </SkillsGrid>
              </motion.div>
            </Flex>
          </Box>

          <Box id="skills" w="100%">
            <Text fontSize="2xl" fontWeight="bold" mb={6} color={textColor} textAlign="center">
              Soft Skills
            </Text>
            <Flex align="center" justify="center">
              <motion.div
                variants={staggerVariants}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                style={{ width: '100%' }}
              >
                <SkillsGrid 
                  templateColumns={{ 
                    base: 'repeat(2, 1fr)', 
                    md: 'repeat(3, 1fr)',
                    lg: 'repeat(3, 1fr)'
                  }} 
                  gap={6} 
                  justifyItems="center"
                >
                  {isVisible &&
                    softSkills.map((skill) => (
                      <SkillCard 
                        key={skill.name} 
                        variants={fadeInVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Tooltip 
                          label={skill.name} 
                          placement="top" 
                          hasArrow
                          bg="#3182ce"
                          color="white"
                        >
                          <SkillImage src={skill.logo} alt={skill.name} />
                        </Tooltip>
                        <SkillName>{skill.name}</SkillName>
                      </SkillCard>
                    ))}
                </SkillsGrid>
              </motion.div>
            </Flex>
          </Box>
        </SkillsGrid>
      </Flex>
    </SkillSection>
  );
};

export default Skill;
