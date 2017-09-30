import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FieldGroup = ({field, value, label, error, type, onChange, checkUserExists}) => {
    const attributes = {
        field,
        label,
        type,
    };

    return (
        <div className={classnames("form-group", {'has-error': error})}>
            <label className="control-label">
                {label}
            </label>
            <input
                value={value}
                type={type}
                name={field}
                className="form-control"
                onChange={onChange}
            />
            {error && <span className="help-block">{error}</span>}
        </div>
    );
};

FieldGroup.propTypes = {
    field: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

FieldGroup.defaultProps = {
    type: 'text'
};

export default FieldGroup;