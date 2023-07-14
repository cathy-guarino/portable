import { Search } from './components/Search';
import { Reader } from './components/Reader';
import { useSelector } from 'react-redux';

function App() {

  const selectedArticle = useSelector((state) => state.app.selectedArticle)

  return (
    <div className="App mx-auto">
      { selectedArticle.id 
        ? <Reader id={selectedArticle.id} title={selectedArticle.title}/>  
        : <Search /> }
    </div>
  );
}

export default App;
