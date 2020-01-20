import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import {useField} from 'react-final-form-hooks';

export default function FormGroup({form, field, label, placeholder, as, rows, validate}) {
  const {meta: {error, touched}, input} = useField(field, form, validate);
  return (
    <Form.Group controlId={`formGroup${field}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control as={as}
                    rows={rows}
                    isInvalid={touched && error}
                    placeholder={placeholder}
                    className="mb-2"
                    {...input}/>
      {touched && error && <Alert variant="danger">{error}</Alert>}
    </Form.Group>
  )
}
