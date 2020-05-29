import { createGlobalStyle } from 'styled-components';
import fontFaces from './fontsPath';

export default createGlobalStyle`

${fontFaces}

.icon-user:before {
  content: "\e900";
}
.icon-user:before {
  content: "\e900";
}
.icon-previus:before {
  content: "\e901";
}
.icon-card:before {
  content: "\e902";
}
.icon-box:before {
  content: "\e903";
}
.icon-update-arrows:before {
  content: "\e904";
}
.icon-coin:before {
  content: "\e905";
}
.icon-truck:before {
  content: "\e906";
}
.icon-chat:before {
  content: "\e907";
}
.icon-arrow-triangle-down:before {
  content: "\e908";
}
.icon-industry:before {
  content: "\e909";
}
.icon-filter:before {
  content: "\e90a";
}
.icon-next:before {
  content: "\e90b";
}
.icon-boxes:before {
  content: "\e90c";
}
.icon-caret:before {
  content: "\e90d";
}
.icon-check-symbol:before {
  content: "\e90e";
}
.icon-chip-form:before {
  content: "\e90f";
}
.icon-close-outline:before {
  content: "\e911";
}
.icon-close:before {
  content: "\e912";
}
.icon-correct:before {
  content: "\e913";
}
.icon-envelope:before {
  content: "\e914";
}
.icon-excel:before {
  content: "\e915";
}
.icon-eye:before {
  content: "\e916";
}
.icon-home:before {
  content: "\e917";
}
.icon-invoice-danger:before {
  content: "\e918";
}
.icon-invoice-warning:before {
  content: "\e919";
}
.icon-invoice:before {
  content: "\e91a";
}
.icon-locker:before {
  content: "\e91c";
}
.icon-logout:before {
  content: "\e91d";
}
.icon-menu:before {
  content: "\e91e";
}
.icon-pallet:before {
  content: "\e91f";
}
.icon-phone:before {
  content: "\e920";
}
.icon-picture:before {
  content: "\e921";
}
.icon-information:before {
  content: "\e925";
}
.icon-cancel:before {
  content: "\e927";
}
.icon-chat1:before {
  content: "\e928";
}
.icon-close1:before {
  content: "\e929";
}
.icon-location:before {
  content: "\e92a";
}
.icon-phone1:before {
  content: "\e92b";
}
.icon-question:before {
  content: "\e92c";
}
.icon-trash:before {
  content: "\e939";
}
.icon-warning:before {
  content: "\e93a";
}
.icon-pencil:before {
  content: "\e93b";
}
.icon-hand:before {
  content: "\e93c";
}
.icon-iconpdf:before {
  content: "\e93d";
}
.icon-icondoc:before {
  content: "\e93e";
}

body {
  min-height: 100vh;
  margin: 0;
  font-size: 14px;
  -webkit-font-smoothing: antialiased !important;
}

i {
  font-family: 'icomoon';
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

img {
  border-style: none;
}

button {
  cursor: pointer;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}


[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

`;
