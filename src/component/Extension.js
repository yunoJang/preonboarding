import Field from './Field';
import './Extension.css';

const OVERLAY_CLASSNAME = 'overlay';

const exploreContent = [
    {title:'영업',subContent:['기업영업','외부영업','영업 관리자','기술영업','주요고객사 담당자','솔루션 컨설턴트','해외영업','더보기']},
    {title:'미디어',subContent:['콘텐츠 크리에이터','PD','영상 편집가','에디터','비디오 제작','작가','출판 기획자','더보기']},
    {title:'인사',subContent:['인사담당','리크루터','조직문화','평가·보상','헤드헌터','HRBP','HRD','더보기']},
    {title:'게임 제작',subContent:['게임 기획자','게임 그래픽 디자이너','모바일 게임 개발자','게임 아티스트','게임 클라이언트 개발자','게임 서버 개발자','유니티 개발자','더보기']},
    {title:'금융',subContent:['회계담당','재무담당자','IR','투자·증권','재무 분석가','애널리스트','내부통제 담당자','더보기']},
]

const restExploreContent = ['엔지니어링·설계','제조·생산','물류·무역','의료·제약·바이오','교육','법률·법집행기관','식·음료','건설·시설','공공·복지']

function Extension({showId, hide}) {
    
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
                    <RestContent />
                </div>
            </div>
        </div>
        : null
    )
}

function RestContent() {
    const renderRestContent = ()=> {
        return restExploreContent.map((content,index)=>
            <li key={index}>{content}<button>&gt;</button></li>
        )
    }

    return(
        <div className='explore-field'>
            <ul className='rest-list'>
                {renderRestContent()}
            </ul>
        </div>
    )   
}

export default Extension;