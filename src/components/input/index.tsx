import React from 'react';
import { Error } from 'components/error/error';
import { useFormContext, useWatch } from 'react-hook-form';

export type Props = React.InputHTMLAttributes<HTMLTextAreaElement> & {
  label?: string | React.ReactNode;
  name: string;
};

export const Input = (props: Props) => {
  const { label, name, ...otherProps } = props;

  const {
    setValue,
    formState: { errors },
  } = useFormContext();
  const value = useWatch({ name });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setValue(name, value);
  };

  return (
    <div>
      {!!label && (
        <label
          className="block font-normal text-base text-naturalGray mb-1.5 whitespace-pre-line"
          htmlFor={name}
        >
          {label}
        </label>
      )}

      <textarea
        {...otherProps}
        data-testid={name}
        name={name}
        value={value}
        onChange={handleChange}
        className="px-3 py-[7px] w-full bg-alto rounded-lg text-base font-normal text-ellipsis placeholder:text-base placeholder:font-normal "
      />

      {typeof errors.text?.message === 'string' && (
        <Error error={errors.text.message} fullHeight={false} />
      )}
    </div>
  );
};
