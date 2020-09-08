export const getCardFlag = card => {
    const cards = {
        visa: /^4[0-9]{12}(?:[0-9]{3})/,
        mastercard: /^5[1-5][0-9]{14}/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
        amex: /^3[47][0-9]{13}/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
        hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
        elo: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}/,
        aura: /^(5078\d{2})(\d{2})(\d{11})$/,
    };

    const flag = Object.keys(cards).filter(el => cards[el].test(card));

    return flag.length ? flag[0] : false;
};

export const regex = {
    maskCpfOrEmail: value => {
        const initialValue = value[0];

        if (!Number.isNaN(Number(initialValue))) {
            let customValue = value;

            if (value.length > 13) {
                customValue = value.substr(0, 14);
            }

            customValue = customValue.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})$/, '$1.$2.$3-$4');
            return customValue.substr(0, 18);
        }

        return regex.maskEmail(value);
    },
    maskCpfCnpj: value => {
        let customValue = value;

        customValue = customValue.replace(/\D/g, '');

        if (customValue.length < 14) {
            customValue = customValue.replace(/(\d{3})(\d)/, '$1.$2');
            customValue = customValue.replace(/(\d{3})(\d)/, '$1.$2');
            customValue = customValue.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        } else {
            customValue = customValue.replace(/^(\d{2})(\d)/, '$1.$2');
            customValue = customValue.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
            customValue = customValue.replace(/\.(\d{3})(\d)/, '.$1/$2');
            customValue = customValue.replace(/(\d{4})(\d)/, '$1-$2');
        }
        return customValue.substr(0, 18);
    },
    maskTelCel: value => {
        let customValue = value;

        customValue = customValue.replace(/\D/g, '');
        customValue = customValue.replace(/^(\d{2})(\d)/g, '($1) $2');
        return customValue.replace(/(\d)(\d{4})$/, '$1 - $2').substr(0, 17);
    },
    maskTelCelWithoutDDD: value => {
        let customValue = value;
        customValue = customValue.replace(/\D/g, '');
        return customValue.replace(/(\d)(\d{4})$/, '$1 - $2').substr(0, 17);
    },
    maskDate: value => {
        let customValue = value;

        customValue = customValue.replace(/\D/g, '');
        customValue = customValue.replace(/^(\d{2})(\d{1,2})/g, '$1/$2');
        return customValue.replace(/(\d{2}\/\d{2})(\d{1,4})$/, '$1/$2').substr(0, 10);
    },
    maskDateCard: value => {
        let customValue = value;

        customValue = customValue.replace(/\D/g, '');
        return customValue.replace(/^(\d{2})(\d{1,2})/g, '$1/$2').substr(0, 5);
    },
    maskOnlyNumber: value => {
        const customValue = value;

        return customValue.replace(/\D/g, '').substr(0, 5);
    },
    maskOnlyOrderNum: value => {
        const customValue = value;
        return customValue.replace(/\D/g, '').substr(0, 11);
    },
    maskCep: value => {
        let customValue = value;

        customValue = customValue.replace(/\D/g, '');

        return customValue.replace(/^(\d{5})(\d{1,2})/g, '$1-$2').substr(0, 9);
    },
    maskName: value => {
        const customValue = value;

        return customValue.replace(/[0-9@#?=*^~%¬%§$!'´`":;¨&£¢ªº¹²³()[\]{}/|\\/_,.+-]/g, '');
    },
    maskNameCard: value => {
        let customValue = value;

        customValue = customValue.replace(/[0-9@#?=*^~%¬%§$!'´`":;¨&£¢ªº¹²³()[\]{}/|\\/_,.+-]/g, '');
        return customValue.replace(/[À-ú]/g, '').toUpperCase();
    },
    maskCard: value => {
        let customValue = value;

        customValue = customValue.replace(/\D+/g, '');
        customValue = customValue.replace(/(\d{4})(\d)/, '$1 $2');
        customValue = customValue.replace(/(\d{4})(\d)/, '$1 $2');
        customValue = customValue.replace(/(\d{4})(\d)/, '$1 $2');

        if (customValue.length >= 4) {
            const flag = getCardFlag(customValue.replace(/[^0-9]+/g, ''));
            if (flag) {
                switch (flag) {
                    case 'amex':
                    case 'diners':
                        customValue = customValue.replace(/ /g, '');
                        customValue = customValue.replace(/(\d{4})(\d)/, '$1 $2');
                        customValue = customValue.replace(/(\d{6})(\d)/, '$1 $2');
                        break;
                    default:
                        return customValue;
                }
            }
        }

        return customValue;
    },
    maskCardCvv: value => {
        const customValue = value;

        return customValue.replace(/\D+/g, '').substr(0, 4);
    },
    maskEmail: value => {
        const customValue = value;

        return customValue.replace(/[§#?=*^~%¬%§$!'´`":;¨&£¢ªº°¹²³()[\]{}/|\\/ç,+]/g, '');
    },
};

export const removeBlankSpace = text => {
    let formatted = text;

    while (/[\s\r\t\f\v]/.test(formatted)) {
        formatted = formatted.replace(new RegExp(/[\s\r\t\f\v]/), '');
    }

    return formatted;
};
