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
import HeadImg from './HeadImg';
import {Toaster} from 'react-hot-toast'
function App() {

  let router = createBrowserRouter([
    {path: '/', element: <Routs></Routs>, errorElement: <ErrorPage></ErrorPage>,  children: [
        
        {path: '/', element: <Home></Home>, loader: async() => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
      }},
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
      <Toaster></Toaster>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
