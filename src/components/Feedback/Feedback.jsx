import React from "react";
import PropTypes from 'prop-types'
import css from './Feedback.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div>
        {options.map((option) => 
            <button type="button" key={Math.random()} name={option} onClick={onLeaveFeedback} className={css.btn}>{option}</button>
           
        )} 
    </div> 
)

FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
};