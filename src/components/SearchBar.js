import React, {useState} from 'react'

const SearchBar = ({onTermSubmit}) => {
    const [term, setTerm] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();

        onTermSubmit(term);
        // make sure to call callback from parent component


    };

    return (
        <div className="ui segment search-bar">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input 
                        type="text" 
                        value={term} 
                        onChange={(e) => setTerm(e.target.value)} 
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar
