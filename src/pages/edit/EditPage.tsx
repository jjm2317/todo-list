import { AppContainer } from 'components/AppContainer';
import { CreateForm, ModifyForm } from 'components/edit/Form';
import Header from 'components/header/Header';
import { useParams } from 'react-router-dom';

const EditHeader = () => <Header title="To-Do" />;

const EditPage = () => {
  const { todoId } = useParams();
  return (
    <AppContainer>
      <EditHeader />
      {todoId ? <ModifyForm todoId={Number(todoId)} /> : <CreateForm />}
    </AppContainer>
  );
};

export default EditPage;
