import { TodoInfo } from 'model/todo';
import { useCallback, useState } from 'react';

const useTodoForm = (curTodo: TodoInfo | undefined) => {
  const [todoTitle, setTodoTitle] = useState<string>(curTodo?.todo || '');
  const [content, setContent] = useState<string>(curTodo?.content || '');
  const [dueDate, setDueDate] = useState<string | undefined>(
    curTodo?.dueDate || undefined,
  );
  const handleTodoChange = useCallback((e) => {
    setTodoTitle(e.target.value);
  }, []);

  const handleContentChange = useCallback((e) => {
    setContent(e.target.value);
  }, []);

  const handleDueDateChange = useCallback((date) => {
    setDueDate(date ? date.toISOString() : '');
  }, []);
  return {
    todoTitle,
    content,
    dueDate,
    handleTodoChange,
    handleContentChange,
    handleDueDateChange,
  };
};

export default useTodoForm;
