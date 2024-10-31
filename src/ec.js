import { $ } from "jquery";
import { propUser } from './property/propUser.js';
import { propGeneral } from './property/propGeneral.js';

export const ec = {
    online: false,
    origin: location.protocol == 'file:' ? 'https://ec.nyase.ru' : location.origin,
    version: new Date(),
    properties: {
        user: propUser,
        general: propGeneral
    },
    updater: {
        fetch: async function (url = ec.origin + '/uj') {
            $.getScript(url);
        },
    },
    plugin: {},
};
