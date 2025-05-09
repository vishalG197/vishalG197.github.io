import React from 'react';
import styled from 'styled-components';
import { Box, Flex, Text, Icon, Input, Textarea, Button, Link, HStack, useColorMode } from '@chakra-ui/react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const StyledContact = styled(motion.div)`

  padding: 40px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 16px;
 
  margin: 0 auto;
`;

const ContactTitle = styled(Text)`
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? 'white' : '#3182ce')};
  margin-bottom: 16px;
`;

const ContactInfo = styled(Flex)`
  align-items: center;
  margin-bottom: 16px;
`;

const ContactIcon = styled(Icon)`
  box-size: 24px;
  margin-right: 8px;
`;

const ContactText = styled(Text)`
  color: ${(props) => (props.isDarkMode ? 'white' : '#444')};
`;

const SocialIcons = styled(HStack)`
  justify-content: center;
  margin-bottom: 24px;
`;

const MotionIcon = styled(motion.div)`
  &:hover {
    scale: 1.2;
  }
`;

const ContactForm = styled(Box)`
  text-align: center;
`;

const StyledInput = styled(Input)`
  margin-bottom: 12px;
  border:1px solid;
`;

const StyledTextarea = styled(Textarea)`
  margin-bottom: 12px;
`;

const SendButton = styled(Button)`
  background-color: ${(props) => (props.isDarkMode ? '#3182ce' : '#2a69ac')};
  color: ${(props) => (props.isDarkMode ? 'white' : 'black')};
  &:hover {
    background-color: ${(props) => (props.isDarkMode ? '#2a69ac' : '#3182ce')};
  }
`;

const Contact = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  return (
    <StyledContact isDarkMode={isDarkMode} id="contact">
      <Flex direction="column" align="center">
        <ContactTitle isDarkMode={isDarkMode}>Contact</ContactTitle>

        <ContactInfo>
          <ContactIcon as={FiMail} boxSize={6} />
          <ContactText isDarkMode={isDarkMode} id="contact-email">
          Email: vishalgiri197@gmail.com
          </ContactText>
        </ContactInfo>

        <ContactInfo>
          <ContactIcon as={FiPhone} boxSize={6} />
          <ContactText isDarkMode={isDarkMode} id="contact-phone">
          Phone: +919767176108
          </ContactText>
        </ContactInfo>

        <ContactInfo>
          <ContactIcon as={FiMapPin} boxSize={6} />
          <ContactText isDarkMode={isDarkMode}>Current Location:Pune, Maharashtra, India</ContactText>
        </ContactInfo>

        <SocialIcons spacing={4}>
          <MotionIcon whileHover={{ scale: 1.2 }}>
            <Link href="https://github.com/vishalG197" isExternal id="contact-github">
              <FaGithub size={24} />
            </Link>
          </MotionIcon>
          <MotionIcon whileHover={{ scale: 1.2 }}>
            <Link href="https://www.linkedin.com/in/vishal-giri-833180175/" isExternal id="contact-linkedin">
              <FaLinkedin size={24} />
            </Link>
          </MotionIcon>
        </SocialIcons>

        <ContactForm>
          <ContactTitle as="h3" fontSize="24px" mb={4} isDarkMode={isDarkMode}>
          Send a Message:
          </ContactTitle>

          <StyledInput type="text" placeholder="Your Name" />

          <StyledInput type="email" placeholder="Your Email" />

          <StyledTextarea placeholder="Your Message" />

          <SendButton colorScheme="blue" size="lg" isDarkMode={isDarkMode}>
            Send
          </SendButton>
        </ContactForm>
      </Flex>
    </StyledContact>
  );
};

export default Contact;
