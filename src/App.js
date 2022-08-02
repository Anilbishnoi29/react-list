import logo from './logo.svg';
import './App.css';
import List from './components/List';
import { Card,Container } from 'react-bootstrap';

function App() {

  return (
    <Container>
      <Card className='p-4'>
        <List />
      </Card>
    </Container>
  );
}

export default App;
