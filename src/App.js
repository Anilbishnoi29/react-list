import logo from './logo.svg';
import './App.css';
import List from './components/List';
import FormInput from './components/FormInput';
import { Card,Container } from 'react-bootstrap';
import Style from './components/Style';

function App() {

  return (
    <Container>
      <Card className='p-4'>
        <List />
      </Card>
      <Style />
      <FormInput />
    </Container>
  );
}

export default App;
