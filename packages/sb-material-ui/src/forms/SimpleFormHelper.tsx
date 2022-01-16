import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import { FormHelperProps } from '../types';

/**
 * Wrapper around react-final-form's Form to handle redirection on submit,
 * legacy defaultValue prop, and array inputs.
 *
 * Requires a render function, just like react-final-form
 *
 * @example
 *
 * const SimpleForm = props => (
 *    <FormWithRedirect
 *        {...props}
 *        render={formProps => <SimpleFormView {...formProps} />}
 *    />
 * );
 *
 * @typedef {Object} Props the props you can use (other props are injected by Create or Edit)
 * @prop {Object} initialValues
 * @prop {Function} validate
 * @prop {Function} save
 * @prop {boolean} submitOnEnter
 * @prop {string} redirect
 * @prop {boolean} sanitizeEmptyValues
 *
 * @param {Props} props
 */
const SimpleFormHelper: FC<FormHelperProps> = props => {
  const { initialValues, formContent } = props;
  return (
    <Formik initialValues={initialValues}>
      {formProps => {
        const { handleSubmit } = formProps;
        return <Form onSubmit={handleSubmit}>{formContent}</Form>;
      }}
    </Formik>
  );
};

export default SimpleFormHelper;
