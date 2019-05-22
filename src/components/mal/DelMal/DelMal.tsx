import * as React from 'react';
import './DelMal.less';
import { useEffect, useState } from 'react';
import { hentMal } from '../../../api/api';
import { teksterMaal } from '../tekster';
import Vise from './Vise';
import Redigere from './Redigere';
import { Normaltekst } from 'nav-frontend-typografi';
import Element from 'nav-frontend-typografi/lib/element';
import GrunnPanel from '../../felleskomponenter/grunnPanel';

export interface MalType {
    mal: string | null;
    endretAv: string;
    dato: string | null;
}

function DelMal () {
    const modus = new URL(window.location.href).searchParams.get('modus');

    const [malState, setMalState] = useState('');
    const [laster, setLaster] = useState(true);
    const [feilState, setFeilState] = useState(false);
    const [skalEndreState, setSkalEndreState] = useState(modus === 'rediger');

    useEffect(() => {
        hentMal()
            .then((res: MalType) => {
                if (!!res.mal) {
                    setMalState(res.mal);
                }
                setLaster(false);
            })
            .catch(() => {
                setFeilState(true);
            });
    }, []);

    if (feilState) {
        return (
            <div className="del-mal">
                <Element className="del-mal-tittel">{teksterMaal.delMalTittel}</Element>
                <Normaltekst>Feil ved henting av forklaring og delmål. Prøv igjen på nytt.</Normaltekst>
            </div>
        );
    }

    return(
        <GrunnPanel className="del-mal" border={true}>
            {
                !skalEndreState
                    ?
                    <Vise malState={malState} setSkalEndreState={setSkalEndreState} laster={laster}/>
                    :
                    <Redigere malState={malState} setMalState={setMalState} setSkalEndreState={setSkalEndreState}/>
            }
        </GrunnPanel>
    );
}

export default DelMal;
