import React from 'react';
import { Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Logo = () => {
  const name = 'VishalG';
  const emoji = '💻';

  const charColors = ['#FF0080', '#FF3D00', '#FF6F00', '#FFD600', '#00B0FF', '#0091EA', '#00C853'];

  return (
    <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={4}>
      {name.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.2 }}
          style={{ display: 'inline-block', color: charColors[index % charColors.length], cursor: 'pointer' }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: name.length * 0.1 }}
        whileHover={{ scale: 1.2 }}
        style={{ display: 'inline-block', cursor: 'pointer' }}
      >
        {emoji}
      </motion.span>
    </Text>
  );
};

export default Logo;
