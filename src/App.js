import './index.css';
import Header from './components/Header';
import Content from './components/Content/index';
import Footer from './components/Footer';
import {TodoProvider} from './context/TodoContext';

function App() {
  return (

    <TodoProvider>
      <section className="todoapp">
        <Header />
        <Content />
      </section>
      
      <Footer />
    </TodoProvider>


  );
}

export default App;
