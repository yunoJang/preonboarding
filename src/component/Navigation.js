import './Navigation.css';

function Navigation() {
    return (
        <ul className='nav-list'>
            <li data-show-id='explore'>탐색</li>
            <li data-show-id=''>커리어 성장</li>
            <li data-show-id=''>직군별 연봉</li>
            <li data-show-id=''>이력서</li>
            <li data-show-id=''>매치업</li>
            <li data-show-id=''>프리랜서</li>
        </ul>
    )
}

export default Navigation;