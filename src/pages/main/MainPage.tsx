import { AppContainer } from 'components/AppContainer';
import Header from 'components/header/Header';
import Todo from 'components/todo/Todo';
import Weather from 'components/weather/Weather';

const MainPage = () => {
  return (
    <AppContainer>
      <MainHeader />
      <Weather />
      <Todo />
    </AppContainer>
  );
};

export default MainPage;

const MainHeader = () => (
  <Header title="THIS WEEK" subtitle="신나는 일주일을 계획합시다!" />
);
