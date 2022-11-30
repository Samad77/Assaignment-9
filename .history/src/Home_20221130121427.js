import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HeadImg from './HeadImg';
import QuizCard from './QuizCard';

const Home = () => {
    let loadDatas = useLoaderData();
    console.log(loadDatas);
    // let datas = loadDatas.data;
    // console.log(datas);

    return (
        <section>
            <HeadImg></HeadImg>

            <div className='grid grid-cols-1 w-3/12 mx-auto gap-5'>
                {/* {
                    datas.map(data => console.log(data))
                } */}
                {
                    datas.map(data => <QuizCard key={data.id} quizData={data}></QuizCard>)
                }
            </div>
        </section>
    );
};

export default Home;