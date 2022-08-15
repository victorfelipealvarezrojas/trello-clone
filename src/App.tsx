import { Column } from "./components/task";
import { AddNewItem } from "./components/task/AddNewItem"
import { AppContainer } from "./styleComponents";
import { addList, useAppState } from "./state";


function App() {

  const {lists, dispatch} = useAppState()
  
  return (
    <AppContainer>
      {lists.map(list => (
        <Column text={list.text} id={list.id} />
      ))}
      <AddNewItem 
                  toggleButtonText="+ Add another list" 
                  onAdd={text => dispatch(addList(text))} />
    </AppContainer>
  );
}

export default App;
