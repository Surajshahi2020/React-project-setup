import { useForm } from '@tanstack/react-form';
import React from 'react';
import Button from '../reusable/Button';

type FormField = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
};

type ReusableFormProps = {
  fields: FormField[];
  initialValues: Record<string, any>;
  onSubmit: (values: Record<string, any>) => void;
};

const ReusableForm: React.FC<ReusableFormProps> = ({ fields, initialValues, onSubmit }) => {
  const form = useForm({
    defaultValues: initialValues,
    onSubmit: ({ value }) => onSubmit(value),
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      {fields.map((field) => (
        <form.Field key={field.name} name={field.name}>
          {(fieldApi) => (
            <div className="mb-2">
              <label className="block mb-1">{field.label}</label>
              <input
                type={field.type || 'text'}
                placeholder={field.placeholder}
                value={fieldApi.state.value}
                onBlur={fieldApi.handleBlur}
                onChange={(e) => fieldApi.handleChange(e.target.value)}
                className="border p-2 w-full rounded"
              />
              {/* Show errors if any */}
              {fieldApi.state.meta.errors.length > 0 && (
                <p className="text-red-500 text-sm">
                  {fieldApi.state.meta.errors.join(', ')}
                </p>
              )}
            </div>
          )}
        </form.Field>
      ))}

      <Button type="submit" className="primary" size="medium">
        Submit
      </Button>
    </form>
  );
};

export default ReusableForm;
