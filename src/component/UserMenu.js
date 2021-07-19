import './UserMenu.css';

function UserMenu() {
    return (
        <aside className='user-menu'>
            <ul>
                <li>검색</li>
                <li>알림</li>
                <li>프로필</li>
            </ul>

            <button className='company'>기업서비스</button>
        </aside>
    )
}

export default UserMenu;