import { StoriesContainer } from './components/StoriesContainer';
import Header from './components/Header';
import './styles/index.css';
import Container from './components/Container';

export const App = () => {
  return (
    <>
      <Container>
        <Header />
        <StoriesContainer />
      </Container>
    </>
  );
};
