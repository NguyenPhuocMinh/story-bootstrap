import { FC } from 'react';
import { Formik, Form } from 'formik';
import { FormHelperProps } from '../types';

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
