import { css } from 'styled-components';

import IcomoonEOT from '../fonts/icomoon.eot';
import IcomoonSVG from '../fonts/icomoon.svg';
import IcomoonTTF from '../fonts/icomoon.ttf';
import IcomoonWOFF from '../fonts/icomoon.woff';

export const fontFaces = css`


  @font-face {
    font-family: 'icomoon';
    font-weight: normal;
    font-style: normal;
    font-weight: normal;
    font-display: block;
    src: url('${IcomoonEOT}?iconsd');
    src: url('${IcomoonEOT}?iconsd#iefix') format('embedded-opentype'),
    url('${IcomoonTTF}?iconsd') format('truetype'),
    url('${IcomoonWOFF}?iconsd') format('woff'),
    url('${IcomoonSVG}?iconsd#icomoon') format('svg');
    }
`;
