import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from './QuizCard';

const Home = () => {
    let loadDatas = useLoaderData();
    let datas = loadDatas.data;
    console.log(datas);

    return (
        <div className='grid grid-cols-1 w-3/12 mx-auto gap-5'>
                {
                    datas.map(data => console.log(data))
                }
                {
                    datas.map(data => <QuizCard key={data.id} quizData = {data}></QuizCard>)
                }
        </div>
    );
};

export default Home;