import { Formik } from 'formik';
import { SimpleFormBootStrapProps } from '../types';

/**
 * Wrapper around formik and yup Form to handle,
 *
 * @example
 *
 * const SimpleForm = props => (
 *    <SimpleFormBootStrap
 *       onSubmit={onSubmit}
 *       initialValues={initialValues}
 *       validationSchema={validationSchema}
 *       formContent={FormContent}
 *    />
 * );
 *
 * const FormContent = ({
 *  handleSubmit,
 *  handleChange,
 *  handleBlur,
 *  values,
 *  errors
 * }: formProps) => (
 *  <Form onSubmit={handleSubmit}>
 *    <TextInputBootStrap
 *      label="email"
 *      required
 *      source="email"
 *      {...formProps}
 *    />
 *  </Form>
 * )
 *
 * @typedef {Object} Props the props you can use (other props are injected by Create or Edit)
 * @param {Object} initialValues
 * @param {Function} onSubmit
 * @param {Function} validationSchema
 * @param {ComponentType<any>} formContent
 * @param {Props} props
 */
const SimpleFormBootStrap = (props: SimpleFormBootStrapProps) => {
  const { initialValues, onSubmit, validationSchema, formContent } = props;

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      component={formContent}
    />
  );
};

export default SimpleFormBootStrap;
