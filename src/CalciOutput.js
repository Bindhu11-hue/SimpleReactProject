import React, { Component } from 'react';

const CalciOutput = ({ result,operation }) => {
    return (
        <div>
            {operation} : {result}
        </div>
    );
};


export default CalciOutput;
