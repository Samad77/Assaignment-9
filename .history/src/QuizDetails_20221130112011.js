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
        <div className='my-10'>
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
           
        <div className='my-10 w-10/12 mx-auto bg-pink-600 rounded-xl'>
            
            <h2 className='text-white text-xl mt-4 my-3'>{quiz.question}</h2>

             <AiFillEyeInvisible className="mx-auto my-5 text-3xl" onClick={() => setAnswer(true)}></AiFillEyeInvisible>

            {
                showCorrectAns && <h2 className='text-white text-xl font-extrabold my-4'>Correct Answer : {quiz.correctAnswer}</h2>
            }

            {
                quiz.options.map(option => <QuizOption option= {option} quiz = {quiz}></QuizOption>)
            }

            
            
            

        </div>
            
    )
}
let QuizOption = ({option, quiz}) => {
    // let [seeCorrectAnswer, setCorrectAnswer] = useState(false);
    // let showCorrectAns = () => {
    //     // console.log(quiz.correctAnswer)
    //     if(option === quiz.correctAnswer){
    //         let callCorrectAns = document.getElementById('correctAns');
    //         callCorrectAns.innerText = 'Correct';
    //         console.log('correct')
    //     }
    //     // else{
    //     //     let callCorrectAns = document.getElementById('correctAns');
    //     //     callCorrectAns.innerText = 'Incorrect';
    //     // }
    // }

    const [isCheacked, setIscheacked] = useState()
    const handleChange = (e) => {
        const cheackedValue = e.target.value;
        const correct =  quiz.correctAnswer;
        if(cheackedValue === correct){
             alert("Correct");
            return
        }

        return alert("Incorrect")
    }
    return(
        
        <div className='w-10/12 mx-auto my-5'>
        
            <div className='flex justify-center items-center bg-white rounded-xl'>
            
            <label className='text-black'><input type="radio" onChange={handleChange} value={option} className='my-5 mr-2'  />{option}</label>
            
            </div>
            
            
        
        
        </div>
    )
}




// let Quiz = () => {

// }




export default QuizDetails;