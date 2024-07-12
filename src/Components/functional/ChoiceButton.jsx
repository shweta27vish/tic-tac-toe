import React from 'react';

const ChoiceButton = ({ type, choice, label, onChoice }) => {
    return (
        <div className={`btn btn-${type}`} onClick={() => onChoice(choice)}>
            {label}
        </div>
    );
}

export default ChoiceButton;
