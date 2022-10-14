import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title='Welcome to the new blog';
  const likes=50;
  const link="http://www.google.com";
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home></Home>
        <h1>App Component</h1>
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{17} </p>
        <p>{"Helloo Ninjas"} </p>
        <p>{[1,2,3,4,5]} </p>
        <p>{Math.random() *10}</p>
        <a href={link}>Google site</a>
      </div>
    </div>
  );
}

export default App;
