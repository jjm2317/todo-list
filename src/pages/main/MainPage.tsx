import Header from 'components/header/Header';
import Weather from 'components/weather/Weather';

const MainPage = () => {
  return (
    <>
      <MainHeader />
      <Weather />
    </>
  );
};

export default MainPage;

const MainHeader = () => (
  <Header title="THIS WEEK" subtitle="신나는 일주일을 계획합시다!" />
);
