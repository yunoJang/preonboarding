import './Field.css';

function Field({title,subContent}) {
    const renderSubContent = ()=> {
        return subContent.map((content,index)=> 
            <li key={index}> {content}</li>    
        )
    }

    return (
        <div className='explore-field'>
            <header><h2>{title}</h2><button>&gt;</button></header>
            <ul className='content-list'>
                {renderSubContent()}
            </ul>
        </div>
    )
}

export default Field;