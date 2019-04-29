import * as React from 'react';
import './Mal.less';
import DelMal from './DelMal/DelMal';
import FremtidigSituasjon from './FremtidigSituasjon';
import Malhistorikk from './Malhistorikk/Malhistorikk';
import MalBanner from './MalBanner/MalBanner';

function Mal () {

    return(
        <section className="mal-container">
            <MalBanner/>
            <FremtidigSituasjon/>
            <DelMal/>
            <Malhistorikk/>
        </section>
    );
}

export default Mal;