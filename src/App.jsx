import { useState } from 'react';

import Header from '@/components/Header';
import SectionWrapper from '@/components/SectionWrapper';

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      entry: 'Clean car',
      open: true,
    },
    {
      id: 2,
      entry: 'Learn React',
      open: false,
    },
  ]);

  function handleItemAction(id, operation) {
    const targetItem = todos.find(todo => todo.id === id);
    switch(operation) {
      case 'done':
        setTodos((old) => {
          old.map(olditem => {
            if(olditem.id !== id)
            {
              return olditem;
            }
            else {
              olditem.open = false;
            }
          });
        });
        break;
      case 'undone':
        targetItem.open = true;
        break;
      case 'delete':
        markasdeleted(targetItem);
        break;
    }
    console.table(todos);
  }

  function markasdone(item) {
    item.open = false;
  }
  function markasundone(item) {
    item.open = true;
  }
  function markasdeleted(item) {

  }

  return (
    <>
    <Header></Header>
    <SectionWrapper
      todos={todos}
      handleItemAction={handleItemAction}>
    </SectionWrapper>
    </>
  )
}

export default App
