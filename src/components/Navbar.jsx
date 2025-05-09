// import React, { useRef, useEffect, useState } from 'react';
// import {
//   Box,
//   Flex,
//   Text,
//   Button,
//   IconButton,
//   useColorMode,
//   useColorModeValue,
//   Link as ChakraLink,
// } from '@chakra-ui/react';
// import { FiSun, FiMoon, FiHome, FiUser, FiBriefcase, FiDownload, FiMail, FiMenu, FiGithub } from 'react-icons/fi';
// import Logo from './Logo';
// import Home from './Home';
// import About from './About';
// import Skill from './Skill';
// import Project from './Project';
// import Contact from './Contact';
// import Github from './GitCalender';
// import styled from 'styled-components';
// import download from 'downloadjs';
// import resume from "../Vishal-Giri-Resume.pdf"
// const Div = styled.div` 
//  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
//   :hover {
//     box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
//   }
// `;

// const Navbar = () => {

//   const githubref =useRef(null)
//   const homeRef = useRef(null);
//   const aboutRef = useRef(null);
//   const skillsRef = useRef(null);
//   const projectsRef = useRef(null);
//   const contactRef = useRef(null);
//   const { colorMode, toggleColorMode } = useColorMode();
//   const [showDownloadButton, setShowDownloadButton] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isScrolling, setIsScrolling] = useState(false); // Add this state flag

//   const scrollToRef = (ref) => {
//     if (!isScrolling) { // Check if scrolling is not already in progress
//       setIsScrolling(true); // Set the flag to prevent multiple scrolls
//       ref.current.scrollIntoView({ behavior: 'smooth' });
//       setTimeout(() => {
//         setIsScrolling(false); // Reset the flag after scrolling is done
//       }, 1000); // Adjust the timeout based on your needs
//     }
//   };
  
//   const handleScroll = () => {
//     const scrollPosition = window.scrollY || document.documentElement.scrollTop;
//     if (scrollPosition > 0) {
//       setShowDownloadButton(true);
//     } else {
//       setShowDownloadButton(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // const scrollToRef = (ref) => {
//   //   ref.current.scrollIntoView({ behavior: 'smooth' });
//   // };
//   const handleNavItemClick = (ref) => {
//     if (ref && ref.current) {
//       scrollToRef(ref);
//       setIsMobileMenuOpen(false);
//     }
//   };
  

//   const handleMobileMenuToggle = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };
//   const handleDownload = async() => {
  
//     try {
//      const link = document.createElement('a');
//     link.href = "https://drive.google.com/file/d/1d76E1UOtbhlvW_2jtDzpCP4ASv79B09R/view?usp=drive_link";
//     link.target = '_blank';
//     link.rel = 'noopener noreferrer';
    
//     link.click();
//     // download("https://drive.google.com/file/d/1d76E1UOtbhlvW_2jtDzpCP4ASv79B09R/view?usp=drive_link", 'Vishal-Giri-Resume.pdf', 'application/pdf');

//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
//   };

//   const handleDownloads = async () => {
//     try {
//       const link = document.createElement('a');
//       link.href = "https://drive.google.com/uc?export=download&id=1d76E1UOtbhlvW_2jtDzpCP4ASv79B09R"; // Use the export=download URL
//       link.target = '_blank';
//       link.rel = 'noopener noreferrer';
//       // link.style.display = "https://drive.google.com/uc?export=download&id=1d76E1UOtbhlvW_2jtDzpCP4ASv79B09R"; // Hide the link
  
//       document.body.appendChild(link);
      
//       link.click();
  
//       // Remove the link from the DOM after the download starts
//       // setTimeout(() => {
//       //   document.body.removeChild(link);
//       // }, 10000); // You can adjust the delay as needed
//       window.open("https://drive.google.com/file/d/1d76E1UOtbhlvW_2jtDzpCP4ASv79B09R/view?usp=drive_link", "_blank");
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   };

//   return (
//     <> 
     
//       <Flex
       
//         id="nav-menu"
//         as="nav"
//         align="center"
//         bg={useColorModeValue('gray.100', 'gray.900')}
//         boxShadow="md"
//         position="sticky"
//         top="0"
//         zIndex="999"
//       >
//         <Flex align="center">
//           <Logo />
//         </Flex>
//         <Flex  >
//           <div className="nav-link resume">

//           <Button
//         id="resume-button-1"
//         width="150px"
//         height="40px"
//         position="relative"
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         fontSize="16px"
//         color="black"
//         backgroundColor="#3182CE"
//         border="none"
//         leftIcon={<FiDownload />}
//         onClick={handleDownloads}
//       >
//         Resume
      
//       </Button>
     

// </div>
//           </Flex>
//         <Flex align="center">
//           <IconButton
//             aria-label="Toggle Dark/Light Mode"
//             icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
//             size="sm"
//             onClick={toggleColorMode}
//             mr={2}
//             _hover={{ color: useColorModeValue('blue.500', 'blue.200') }}
//           />
//           <Flex display={{ base: 'none', md: 'flex' }} alignItems="center">
//             <Button
//               leftIcon={<FiHome />}
//               colorScheme="blue"
//               variant="ghost"
//               size="sm"
//               onClick={() => handleNavItemClick(homeRef)}
//               _hover={{ textDecoration: 'underline' }}
//               className="nav-link home"
//             >
//               Home
//             </Button>
//             <Button
//               leftIcon={<FiUser />}
//               colorScheme="blue"
//               variant="ghost"
//               size="sm"
//               onClick={() => handleNavItemClick(aboutRef)}
//               _hover={{ textDecoration: 'underline' }}
//               className="nav-link about"
//             >
//               About Me
//             </Button>
//             <Button
//               leftIcon={<FiBriefcase />}
//               colorScheme="blue"
//               variant="ghost"
//               size="sm"
//               onClick={() => handleNavItemClick(skillsRef)}
//               _hover={{ textDecoration: 'underline' }}
//               className="nav-link skills"
//             >
//               Skills
//             </Button>
//             <Button
//               leftIcon={<FiBriefcase />}
//               colorScheme="blue"
//               variant="ghost"
//               size="md"
//               onClick={() => handleNavItemClick(projectsRef)}
//               _hover={{ textDecoration: 'underline' }}
//               className="nav-link projects"
//             >
//               Projects
//             </Button>
//             <Button
//               leftIcon={<FiGithub />}
//               colorScheme="blue"
//               variant="ghost"
//               size="sm"
//               onClick={() => handleNavItemClick(githubref)}
//               _hover={{ textDecoration: 'underline' }}
              
//             >
//               Github
//             </Button>
//             <Button
//               leftIcon={<FiMail />}
//               colorScheme="blue"
//               variant="ghost"
//               size="sm"
//               onClick={() => handleNavItemClick(contactRef)}
//               _hover={{ textDecoration: 'underline' }}
//               className="nav-link contact"
//             >
//               Contact
//             </Button>
//           </Flex>
//           <IconButton
//             aria-label="Toggle Mobile Menu"
//             icon={<FiMenu />}
//             size="sm"
//             display={{ base: 'block', md: 'none' }}
//             onClick={handleMobileMenuToggle}
//             _hover={{ color: useColorModeValue('blue.500', 'blue.200') }}
//           />
//         </Flex>
//       </Flex>

//       {isMobileMenuOpen && (
//         <Flex
//           direction="column"
//           align="center"
//           justify="center"
//           py={2}
//           px={5}
          
//           position="sticky"
//         top="70px"
//         zIndex="999"
//           bg={'gray.400'}
//           // bg={useColorModeValue('gray.100', 'gray.900')}
//           boxShadow="md"
//         >
//           <Button
//             leftIcon={<FiHome />}
//             colorScheme="blue"
//             variant="ghost"
//             size="sm"
//             onClick={() => handleNavItemClick(homeRef)}
//             _hover={{ textDecoration: 'underline' }}
//             className="nav-link home"
//           >
//             Home
//           </Button>
//           <Button
//             leftIcon={<FiUser />}
//             colorScheme="blue"
//             variant="ghost"
//             size="sm"
//             onClick={() => handleNavItemClick(aboutRef)}
//             _hover={{ textDecoration: 'underline' }}
//             className="nav-link about"
//           >
//             About Me
//           </Button>
//           <Button
//             leftIcon={<FiBriefcase />}
//             colorScheme="blue"
//             variant="ghost"
//             size="sm"
//             onClick={() => handleNavItemClick(skillsRef)}
//             _hover={{ textDecoration: 'underline' }}
//             className="nav-link skills"
//           >
//             Skills
//           </Button>
//           <Button
//             leftIcon={<FiBriefcase />}
//             colorScheme="blue"
//             variant="ghost"
//             size="md"
//             onClick={() => handleNavItemClick(projectsRef)}
//             _hover={{ textDecoration: 'underline' }}
//             className="nav-link projects"
//           >
//             Projects
//           </Button>
//           <Button
//             leftIcon={<FiMail />}
//             colorScheme="blue"
//             variant="ghost"
//             size="sm"
//             onClick={() => handleNavItemClick(contactRef)}
//             _hover={{ textDecoration: 'underline' }}
//             className="nav-link contact"
//           >
//             Contact
//           </Button>
//         </Flex>
//       )}

//       <Div ref={homeRef} id="home">
//         <Home />
//       </Div>

//       <Div ref={aboutRef} id="About">
//         <About />
//       </Div>

//       <Div ref={skillsRef} id="skills" >
//         <Skill />
//       </Div>

//       <Div ref={projectsRef} id="projects" >
//         <Project />
//       </Div>

//       <Div ref={githubref} id="github-stats">
//         <Github />
//       </Div>

//       <Div ref={contactRef} id="contact">
//         <Contact />
//       </Div>
     
//     </>
//   );
// };

// export default Navbar;

// const Pointer = styled.button `
// width: 150px;
// height: 40px;
// color:black;
// font-size: 20px;
// background-color:#3182CE;
// position: relative;

// :after {
//   content: "";
//   position: absolute;
//   left: 0;
//   bottom: 0;
//   width: 0;
//   height: 0;
//   border-left: 20px solid white;
//   border-top: 20px solid transparent;
//   border-bottom: 20px solid transparent;
// }

// :before {
//   content: "";
//   position: absolute;
//   right: -20px;
//   bottom: 0;
//   width: 0;
//   height: 0;
//   border-left: 20px solid #3182CE;
//   border-top: 20px solid transparent;
//   border-bottom: 20px solid transparent;
// }
// `;
import React, { useRef, useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
  Link as ChakraLink,
} from '@chakra-ui/react';
import {
  FiSun,
  FiMoon,
  FiHome,
  FiUser,
  FiBriefcase,
  FiDownload,
  FiMail,
  FiMenu,
  FiGithub,
} from 'react-icons/fi';
import Logo from './Logo';
import Home from './Home';
import About from './About';
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';
import Github from './GitCalender';
import styled from 'styled-components';
import download from 'downloadjs';
import resume from '../Vishal-Giri-Resume.pdf';

const Div = styled.div`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
 
`;

const Pointer = styled.button`
  width: 150px;
  height: 40px;
  color: black;
  font-size: 20px;
  background-color: #3182ce;
  position: relative;

  :after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid white;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }

  :before {
    content: '';
    position: absolute;
    right: -20px;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid #3182ce;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
`;

const Navbar = () => {
  const githubref = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const { colorMode, toggleColorMode } = useColorMode();
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToRef = (ref) => {
    if (!isScrolling) {
      setIsScrolling(true);
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition > 0) {
      setShowDownloadButton(true);
    } else {
      setShowDownloadButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavItemClick = (ref) => {
    if (ref && ref.current) {
      scrollToRef(ref);
      setIsMobileMenuOpen(false);
    }
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDownloads = async () => {
    // try {
    //   const link = document.createElement('a');
    //   link.href =
    //     'https://drive.google.com/uc?export=download&id=1d76E1UOtbhlvW_2jtDzpCP4ASv79B09R'; // Use the export=download URL
    //   link.target = '_blank';
    //   link.rel = 'noopener noreferrer';
    
    //   document.body.appendChild(link);
    //   window.open("https://drive.google.com/file/d/1d76E1UOtbhlvW_2jtDzpCP4ASv79B09R/view?usp=drive_link", "_blank");
    //   link.click();

      
    // } catch (error) {
    //   console.error('An error occurred:', error);
    // }

    try {
      const link = document.createElement('a');
      link.href = "https://drive.google.com/uc?export=download&id=1CaLiqqA5o7dmyjhlEM-PFOgzkekuY1qi"; // Use the export=download URL
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      // link.style.display = "https://drive.google.com/uc?export=download&id=1d76E1UOtbhlvW_2jtDzpCP4ASv79B09R"; // Hide the link
  
      document.body.appendChild(link);
      window.open("https://drive.google.com/file/d/1CaLiqqA5o7dmyjhlEM-PFOgzkekuY1qi/view?usp=drive_link", "_blank");
      link.click();
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <Box>
      <Flex
        id="nav-menu"
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        py={2}
        px={5}
        bg={useColorModeValue('gray.100', 'gray.900')}
        boxShadow="md"
        position="sticky"
        top="0"
        zIndex="999"
      >
        <Flex align="center">
          <Logo />
        </Flex>
        <Flex>
          <div className="nav-link resume">
            <Button
              id="resume-button-1"
              width="150px"
              height="40px"
              position="relative"
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontSize="16px"
              color="black"
              backgroundColor="#3182CE"
              border="none"
              leftIcon={<FiDownload />}
              onClick={handleDownloads}
            >
              Resume
            </Button>
          </div>
        </Flex>
        <Flex align="center">
          <IconButton
            aria-label="Toggle Dark/Light Mode"
            icon={colorMode !== 'light' ? <FiMoon /> : <FiSun />}
            size="sm"
            onClick={toggleColorMode}
            mr={2}
            _hover={{ color: useColorModeValue('blue.500', 'blue.200') }}
          />
          <Flex display={{ base: 'none', md: 'flex' }} alignItems="center">
            <Button
              leftIcon={<FiHome />}
              colorScheme="blue"
              variant="ghost"
              size="sm"
              onClick={() => handleNavItemClick(homeRef)}
              _hover={{ textDecoration: 'underline' }}
              className="nav-link home"
            >
              Home
            </Button>
            <Button
              leftIcon={<FiUser />}
              colorScheme="blue"
              variant="ghost"
              size="sm"
              onClick={() => handleNavItemClick(aboutRef)}
              _hover={{ textDecoration: 'underline' }}
              className="nav-link about"
            >
              About Me
            </Button>
            <Button
              leftIcon={<FiBriefcase />}
              colorScheme="blue"
              variant="ghost"
              size="sm"
              onClick={() => handleNavItemClick(skillsRef)}
              _hover={{ textDecoration: 'underline' }}
              className="nav-link skills"
            >
              Skills
            </Button>
            <Button
              leftIcon={<FiBriefcase />}
              colorScheme="blue"
              variant="ghost"
              size="md"
              onClick={() => handleNavItemClick(projectsRef)}
              _hover={{ textDecoration: 'underline' }}
              className="nav-link projects"
            >
              Projects
            </Button>
            <Button
              leftIcon={<FiGithub />}
              colorScheme="blue"
              variant="ghost"
              size="sm"
              onClick={() => handleNavItemClick(githubref)}
              _hover={{ textDecoration: 'underline' }}
            >
              Github
            </Button>
            <Button
              leftIcon={<FiMail />}
              colorScheme="blue"
              variant="ghost"
              size="sm"
              onClick={() => handleNavItemClick(contactRef)}
              _hover={{ textDecoration: 'underline' }}
              className="nav-link contact"
            >
              Contact
            </Button>
          </Flex>
          <IconButton
            aria-label="Toggle Mobile Menu"
            icon={<FiMenu />}
            size="sm"
            display={{ base: 'block', md: 'none' }}
            onClick={handleMobileMenuToggle}
            _hover={{ color: useColorModeValue('blue.500', 'blue.200') }}
          />
        </Flex>
      </Flex>

      {isMobileMenuOpen && (
        <Flex
          direction="column"
          align="center"
          justify="center"
          py={2}
          px={5}
          position="sticky"
          top="70px"
          zIndex="999"
          bg={'gray.400'}
          boxShadow="md"
        >
          <Button
            leftIcon={<FiHome />}
            colorScheme="blue"
            variant="ghost"
            size="sm"
            onClick={() => handleNavItemClick(homeRef)}
            _hover={{ textDecoration: 'underline' }}
            className="nav-link home"
          >
            Home
          </Button>
          <Button
            leftIcon={<FiUser />}
            colorScheme="blue"
            variant="ghost"
            size="sm"
            onClick={() => handleNavItemClick(aboutRef)}
            _hover={{ textDecoration: 'underline' }}
            className="nav-link about"
          >
            About Me
          </Button>
          <Button
            leftIcon={<FiBriefcase />}
            colorScheme="blue"
            variant="ghost"
            size="sm"
            onClick={() => handleNavItemClick(skillsRef)}
            _hover={{ textDecoration: 'underline' }}
            className="nav-link skills"
          >
            Skills
          </Button>
          <Button
            leftIcon={<FiBriefcase />}
            colorScheme="blue"
            variant="ghost"
            size="md"
            onClick={() => handleNavItemClick(projectsRef)}
            _hover={{ textDecoration: 'underline' }}
            className="nav-link projects"
          >
            Projects
          </Button>
          <Button
            leftIcon={<FiMail />}
            colorScheme="blue"
            variant="ghost"
            size="sm"
            onClick={() => handleNavItemClick(contactRef)}
            _hover={{ textDecoration: 'underline' }}
            className="nav-link contact"
          >
            Contact
          </Button>
        </Flex>
      )}

      <Div ref={homeRef} id="home">
        <Home />
      </Div>

      <Div ref={aboutRef} id="About">
        <About />
      </Div>

      <Div ref={skillsRef} id="skills">
        <Skill />
      </Div>

      <Div ref={projectsRef} id="projects">
        <Project />
      </Div>

      <Div ref={githubref} id="github-stats">
        <Github />
      </Div>

      <Div ref={contactRef} id="contact">
        <Contact />
      </Div>
    </Box>
  );
};

export default Navbar;
