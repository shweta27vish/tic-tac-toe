import React from 'react';
import ChoiceButton from '../ChoiceButton';
import Input from '../Input';


const InputForm = ({ stepBack, onSubmit, onTyping, newGame, name, room }) => {
    return (
        <div className="input-container">
            <Input
                name='name'
                placeholder='Your Name...'
                onChange={onTyping}
                value={name}
            />
            {!newGame && (
                <Input
                    name='room'
                    placeholder='Room ID...'
                    onChange={onTyping}
                    value={room}
                />
            )}
            <div className='nav-container'>
                <ChoiceButton className='create-btn' type='nav-back' choice='back' onChoice={stepBack} label='Back' />
                <ChoiceButton className='create-btn' type='nav-forward' choice='submit' onChoice={onSubmit} label="Let's Go" />
            </div>
        </div>
    );
}

export default InputForm;
