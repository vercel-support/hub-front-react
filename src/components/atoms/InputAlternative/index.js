import React from 'react';
import { regex } from '../../../utils/regex';
import InputAlternativeStyles, { InputWrap, ErrorMessage } from './styles';

/**
 * @param  {object} config
 * @param  {string} config.id
 * @param  {string} config.type
 * @param  {string} config.placeholder
 */

const InputAlternative = React.forwardRef((props, ref) => {
    const { onChange = null, mask = null, config, invert, width, value, checked = null, disabled = false, qa, label } = props;

    if (mask && !regex[mask]) return 'Invalid mask!';

    const onInputChange = e => {
        const event = e;

        if (mask) {
            event.target.value = regex[mask](event.target.value);
        }

        if (onChange) onChange(event);
    };

    return (
        <InputWrap width={width} square={config.square}>
            <InputAlternativeStyles
                {...config}
                ref={ref}
                value={value || undefined}
                onChange={onInputChange}
                type={mask ? 'text' : config.type}
                invert={invert}
                checked={checked}
                data-qa={qa}
                disabled={disabled}
            />
            {config.error && <ErrorMessage>{config.message}</ErrorMessage>}
            {config.type && (mask ? 'text' : config.type) === 'radio' && <label htmlFor={config.id} />}
            {config.type && (mask ? 'text' : config.type) === 'checkbox' && <label htmlFor={config.id}>{label}</label>}
        </InputWrap>
    );
});

export default InputAlternative;
