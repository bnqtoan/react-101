import Header from './components/Header';
import Tasks from './components/Tasks';
function App() {
  return (
    <div className="App mt-8 max-w-md mx-auto relative">
        <div className="z-30 relative px-4 py-2 bg-white border border-gray-300 rounded">
          <Header title="Task tracker"/>
          <Tasks/>
        </div>
        <div className="bg-blue-100 z-0 absolute -bottom-1 left-1 rounded w-full h-full"></div> 
    </div>
  );
}

export default App;
