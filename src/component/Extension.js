import './Extension.css';

const OVERLAY_CLASSNAME = 'overlay';

function Extension({showId, hideExtension:hide}) {
    
    const onMouseOver = event=> {
        if(event.target.classList.contains(OVERLAY_CLASSNAME)) {
            hide();
        }
    }

    return (
        showId ? 
        <div className={OVERLAY_CLASSNAME} onMouseOver={onMouseOver}>
            <div className='extension'>
                <div className='container'>
                    
                </div>
            </div>
        </div>
        : null
    )
}

export default Extension;