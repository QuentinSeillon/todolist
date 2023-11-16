import React, { useState } from 'react'

function TodoForm({getValue}) {
    const [inputValue, setInputValue] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if(inputValue.length == 0) return

        const newValue = {
            id: Date.now(),
            text: inputValue
        };

        
        getValue(newValue);

        setInputValue('');
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="text" className="form-label">Texte</label>
            <input type="text" className="form-control" id="text"  value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    )
   
}

export default TodoForm