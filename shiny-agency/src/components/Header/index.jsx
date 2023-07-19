import { Link } from 'react-router-dom';

function Header() {
      return (
            <nav>
                  <Link to='/'>Accueil</Link>
                  <Link to='/Results'>Results</Link>
                  <Link to='/Freelances'>Freelances</Link>
                  <Link to='/survey/1'>Questionnaire</Link>
            </nav>
      );
}

export default Header;
