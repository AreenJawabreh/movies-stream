import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const NavbarFile = () => {
    return (
        <div className="navbar-content" style={{}}>
            <h1>Discover your favourites.</h1>
            <div style={{display:'flex',gap:'10px'}}>
            <div className="searchbar">
                <div className="icon-container">
                    <FontAwesomeIcon icon={faSearch} style={{ color: 'grey' }} />
                </div>
                <input type="text" placeholder="Search here.." className="search-input" />
            </div>
            <div className="filter-button">
                <button>
                    <AdjustmentsHorizontalIcon style={{ height: '30px', width: '30px', color: 'white' }} />
                </button>
            </div>
            </div>
        </div>
    );
}

export default NavbarFile;
