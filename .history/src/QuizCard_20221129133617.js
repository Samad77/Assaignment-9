import React from 'react';
import { Link } from 'react-router-dom';

const QuizCard = (props) => {
    let {id, name, logo, total} = props.quizData;
    return (
        <div className='mt-10 '>
            <div className="card w-96 bg-pink-600 shadow-xl text-white sm:mx-auto">
                <figure className=" pt-10">
                    <img src={logo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Total Question {total}</p>
                    <div className="card-actions">
                    <button className="btn btn-primary"><Link to={`../QuizCard/${id}`}>Click Here</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizCard;