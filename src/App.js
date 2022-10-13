import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Routs from './Routs';
import Statistics from './Statistics';
import Blog from './Blog';
import QuizCard from './QuizCard';
import QuizDetails from './QuizDetails';
import ErrorPage from './ErrorPage';

function App() {

  let router = createBrowserRouter([
    {path: '/', element: <Routs></Routs>, children: [
        
        {path: '/', element: <Home></Home>, errorElement: <ErrorPage></ErrorPage>},
        {path: '/home', element: <Home></Home>, loader: async() => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
        }},
        {path: '/statistics', element: <Statistics></Statistics>},
        {path: '/blog', element: <Blog></Blog>},
        {path: '/QuizCard/:id', element: <QuizDetails></QuizDetails>, loader: ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        }},
    ]}
  ])
  return (
    <div className="App">
      {/* <Header></Header> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
