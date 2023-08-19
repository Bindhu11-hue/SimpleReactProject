import React from 'react';

const CalciInput = ({ parm1, parm2, onParmChange }) => {
    return (
        <div>
            <input
                type="number"
                value={parm1}
                onChange={(e) => onParmChange('parm1', parseFloat(e.target.value))}
            />
            <input
                type="number"
                value={parm2}
                onChange={(e) => onParmChange('parm2', parseFloat(e.target.value))}
            />
        </div>
    );
};

export default CalciInput;
