import { useState } from 'react';

import Header from '@/components/Header';
import SectionWrapper from '@/components/SectionWrapper';
import InputWidget from '@/components/InputWidget';

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
          return old.map(olditem => {
            if(olditem.id !== id)
            {
              return olditem;
            }
            else {
              olditem.open = false;
              return olditem;
            }
          });
        });
        break;
      case 'undone':
        setTodos((old) => {
          return old.map(olditem => {
            if(olditem.id !== id)
            {
              return olditem;
            }
            else {
              olditem.open = true;
              return olditem;
            }
          });
        });
        break;
      case 'delete':
        setTodos(old => {
          return old.filter(item => item.id !== id);
        });
        break;
    }
    console.table(todos);
  }

  function addItem(item) {
    setTodos(old => {
      const newtodos = old.map(item => item);
      newtodos.push(item);
      return newtodos;
    });
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
    <InputWidget addItem={addItem}></InputWidget>
    <SectionWrapper
      todos={todos}
      handleItemAction={handleItemAction}>
    </SectionWrapper>
    </>
  )
}

export default App
