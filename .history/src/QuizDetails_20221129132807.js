import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {AiFillEyeInvisible} from 'react-icons/ai'
const QuizDetails = () => {
    let quizDatas = useLoaderData();
    let quizes = quizDatas.data;
    let allQuiz = quizDatas.data.questions;
    console.log(allQuiz)
    // console.log(quizes);
    let {name} = quizes;
    // console.log(name)
    
    return (
        <div>
            <h1 className='mt-5 text-white text-3xl mb-5'>Quiz of {name}</h1>
            {
                allQuiz.map(quiz => <ShowQuiz quiz = {quiz}></ShowQuiz>)
            }
            
        </div>
    );
};



let ShowQuiz = ({quiz}) => {


    let [showCorrectAns, setAnswer] = useState(false);

    return(
           
        <div className='my-10 w-10/12 mx-auto  bg-pink-600'>
            
            <h2 className='text-white text-xl mt-4 my-3'>{quiz.question}</h2>

             <AiFillEyeInvisible className="mx-auto my-5 text-3xl" onClick={() => setAnswer(true)}></AiFillEyeInvisible>

            {
                showCorrectAns && <h2 className='text-cyan-500 text-xl font-extrabold my-4'>Correct Answer : {quiz.correctAnswer}</h2>
            }

            {
                quiz.options.map(option => <QuizOption option= {option} quiz = {quiz}></QuizOption>)
            }

            
            
            

        </div>
            
    )
}
let QuizOption = ({option, quiz}) => {
    // let [seeCorrectAnswer, setCorrectAnswer] = useState(false);
    let showCorrectAns = () => {
        // console.log(quiz.correctAnswer)
        if(option === quiz.correctAnswer){
            let callCorrectAns = document.getElementById('correctAns');
            callCorrectAns.innerText = 'Correct';
            console.log('correct')
        }
        // else{
        //     let callCorrectAns = document.getElementById('correctAns');
        //     callCorrectAns.innerText = 'Incorrect';
        // }
    }
    return(
        
        <div className='w-10/12 mx-auto  my-5'>
        <button className='bg-slate-100 mt-5 w-full rounded-xl' onClick={showCorrectAns}>
            <div className='flex justify-center items-center'>
            {/* <input type="radio" name="radio-1" className="radio mr-3 radio-accent" /> */}
            <p className='text-red-700 my-10 '>{option}</p>
            
            </div>
            {/* <h2 className='text-2xl text-emerald-700 font-mono'  id='correctAns'></h2> */}
            
        </button>   
        
        </div>
    )
}




// let Quiz = () => {

// }




export default QuizDetails;