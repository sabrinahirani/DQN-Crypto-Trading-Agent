import { Heading, Box } from '@chakra-ui/react';
import D3Graph from './D3Graph';
import Form from './PortfolioForm';
import './styles.css';

function App() {
  return (
    <Box className="App">
      <Heading>Name</Heading>
      <D3Graph />
      <Form bg="red"/>
    </Box>
  );
}

export default App;
