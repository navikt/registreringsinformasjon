import { MalType } from '../components/mal/DelMal/DelMal';
import { JSONObject } from 'yet-another-fetch-mock/dist/types/types';
import { format } from 'date-fns';

export const Mal: MalType & JSONObject = {
    mal: 'hei på deg',
    endretAv: 'BRUKER',
    dato: '2019-04-10T06:19:30.284',
};

const tomMal = [
    {
        mal: null,
        endretAv: '',
        dato: null,
    }
];

export const maler: Array<MalType&JSONObject> = [
    Mal
].concat(tomMal);

export function malListe() {
    return maler;
}

export function sisteMal() {
    if (maler.length === 0) {
        return maler;
    }
    return maler[maler.length - 1];
}

export function opprettMal(mal: string) {
    let nyMal = {
        mal,
        endretAv: 'BRUKER',
        dato: format(new Date()),
    };
    maler.push(nyMal);
    return nyMal;
}
