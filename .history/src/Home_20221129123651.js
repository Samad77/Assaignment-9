import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from './QuizCard';

const Home = () => {
    let loadDatas = useLoaderData();
    let datas = loadDatas.data;
    console.log(datas);

    return (
        <section>
            <img className='w-11/12 my-10 mx-au h-80 mb-7' src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />

            <div className='grid grid-cols-1 w-3/12 mx-auto gap-5'>
                {
                    datas.map(data => console.log(data))
                }
                {
                    datas.map(data => <QuizCard key={data.id} quizData={data}></QuizCard>)
                }
            </div>
        </section>
    );
};

export default Home;