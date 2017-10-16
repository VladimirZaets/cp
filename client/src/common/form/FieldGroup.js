import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FieldGroup = ({field, value, label, error, type, onChange}) => (
    <div className={classnames("form-group", {'has-error': error})}>
        <label className="control-label" htmlFor={field}>
            {label}
        </label>
        <input
            id={field}
            value={value}
            type={type}
            name={field}
            className="form-control"
            onChange={onChange}
        />
        {error && <span className="help-block">{error}</span>}
    </div>
);

FieldGroup.propTypes = {
    field: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

FieldGroup.defaultProps = {
    type: 'text'
};

export default FieldGroup;