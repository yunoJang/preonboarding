import Field from './Field';
import './Extension.css';

const OVERLAY_CLASSNAME = 'overlay';

const exploreContent = [
    {title:'영업',subContent:['기업영업','외부영업','영업 관리자','기술영업','주요고객사 담당자','솔루션 컨설턴트','해외영업','더보기']},
    {title:'미디어',subContent:['콘텐츠 크리에이터','PD','영상 편집가','에디터','비디오 제작','작가','출판 기획자','더보기']},
    {title:'인사',subContent:['기업영업','외부영업','영업 관리자','기술영업','주요고객사 담당자','솔루션 컨설턴트','해외영업','더보기']},
    {title:'게임 제작',subContent:['기업영업','외부영업','영업 관리자','기술영업','주요고객사 담당자','솔루션 컨설턴트','해외영업','더보기']},
    {title:'금융',subContent:['기업영업','외부영업','영업 관리자','기술영업','주요고객사 담당자','솔루션 컨설턴트','해외영업','더보기']},
]


function Extension({showId, hideExtension:hide}) {
    
    const onMouseOver = event=> {
        if(event.target.classList.contains(OVERLAY_CLASSNAME)) {
            hide();
        }
    }

    const renderContent = ()=> {
        return exploreContent.map((column,index)=>
        <Field
            key = {index}
            title = {column.title}
            subContent = {column.subContent}
        />)
    }

    return (
        showId ? 
        <div className={OVERLAY_CLASSNAME} onMouseOver={onMouseOver}>
            <div className='extension'>
                <div className='container'>
                    {renderContent()}
                </div>
            </div>
        </div>
        : null
    )
}

export default Extension;