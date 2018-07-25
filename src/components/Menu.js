import { Link } from 'react-router'
import HomeIcon from 'react-icons/lib/fa/home'
import AddMonsterIcon from 'react-icons/lib/fa/calendar-plus-o'
import ListMonstersIcon from 'react-icons/lib/fa/table'

export const Menu = () => (
    <nav className="menu">
        <Link to="/" activeClassName="selected">
            <HomeIcon />
        </Link>
        <Link to="/add-monster" activeClassName="selected">
            <AddMonsterIcon />
        </Link>
        <Link to="list-monsters" activeClassName="selected">
            <ListMonstersIcon />
        </Link>
    </nav>
)