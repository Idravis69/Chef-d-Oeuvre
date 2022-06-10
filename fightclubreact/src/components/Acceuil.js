import Presentationbloc from './Presentationbloc';
import Tarifsbloc from './Tarifsbloc';
import Localisation from './Localisation';
import Contact from './Contact';


function Acceuil() {
  return (
    <div className="Acceuil">
        <Presentationbloc/>
        <Tarifsbloc/>
        <Localisation/>
        <Contact/>
    </div>
  );
}

export default Acceuil;