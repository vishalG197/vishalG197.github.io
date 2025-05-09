import React from 'react';
import {
  Box,
  Stack,
  Text,
  useColorModeValue,
  Flex,
  Image,
} from '@chakra-ui/react';
import Githubcalendar from 'react-github-calendar';

const Github = () => {
  return (
    <Box maxW={'7xl'} m="auto" mb={8} padding="20px" alignItems="center">
      <Stack spacing={4} w={['100%']} m="auto">
        <Text
          fontSize={"32px"}
          fontWeight={'bold'}
          color={"#3182ce"}
          mb="16px"
        >
          Github Calendar
        </Text>
      </Stack>
      <Githubcalendar
        className="react-activity-calendar"
        username="VishalG197"
        style={{ width: '100%', margin: 'auto' }}
        blockMargin={5}
        fontSize={16}
      />
      <Stack spacing={4} w={['100%']} m="auto">
        <Text
          textTransform={'uppercase'}
          color={'white.400'}
          border="1px solid black"
          fontWeight={600}
          textAlign="center"
          width="200px"
          m={'auto'}
          mt={16}
          mb={8}
          fontSize={'sm'}
          bg={useColorModeValue('blue.50', 'blue.900')}
          p={2}
          alignSelf={'flex-start'}
          rounded={'md'}
        >
          Github Stats
        </Text>
      </Stack>
      <Flex
        direction={['column', 'column', 'column', 'column', 'row']}
        alignItems="center"
        justifyContent="center"
        gap="20px"
        border="1px solid gray"
        padding="10px"
        m={4}
        borderRadius="20px"
        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        flexWrap={['wrap', 'wrap', 'wrap', 'wrap', 'nowrap']}
      >
        <Image
          id="github-stats-card"
          src="https://github-readme-stats.vercel.app/api?username=vishalG197&show_icons=true&locale=en"
          alt="vishal"
          w={['100%', '100%', '100%', '100%', '33%']}
          borderRadius="20px"
        />
        <Image
          id="github-streak-stats"
          src="https://github-readme-streak-stats.herokuapp.com/?user=vishalG197"
          alt="vishal"
          w={['100%', '100%', '100%', '100%', '33%']}
          borderRadius="20px"
        />
        <Image
          id="github-top-langs"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=vishalG197&layout=compact"
          alt="GitHub Top Languages"
          w={['100%', '100%', '100%', '100%', '33%']}
          borderRadius="20px"
        />
      </Flex>
    </Box>
  );
};

export default Github;
