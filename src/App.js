import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import {useState} from 'react';

function App() {

    const [page,setPage] = useState('header');

    const nextPage = (active) => {
      setPage(active);
    }

  return (
    <>
     <Sidebar nextPage={nextPage}  />
     <Main page={page} nextPage={nextPage} />
    </>
  );
}

export default App;
