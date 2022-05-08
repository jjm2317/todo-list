import { AppContainer } from 'components/AppContainer';
import Header from 'components/header/Header';

const EditPage = () => {
  return (
    <AppContainer>
      <EditHeader />
    </AppContainer>
  );
};

export default EditPage;

const EditHeader = () => <Header title="To-Do" />;
