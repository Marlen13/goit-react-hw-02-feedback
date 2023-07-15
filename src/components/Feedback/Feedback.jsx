import React from "react";

export const Feedback = ({ options }) => (
    <div>
        {options.map((option) => 
         <button type="button" name={option}>{option}</button>
         
        )}            
    </div> 
)
