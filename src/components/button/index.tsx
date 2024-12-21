import React from 'react';

type Variant = 'contained' | 'outlined';

type BaseButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type Props = Omit<BaseButtonProps, 'className'> & {
  variant?: Variant;
  fullWidth?: boolean;
};

export function Button(props: Props) {
  const {
    variant = 'contained',
    children,
    type = 'button',
    fullWidth = true,
    ...otherProps
  } = props;

  function getVariantClassNames(variant: Variant) {
    switch (variant) {
      case 'outlined':
        return 'bg-transparent text-black border-black disabled:text-alto';
      case 'contained':
      default:
        return 'bg-black text-white border-transparent hover:bg-naturalGray disabled:bg-alto';
    }
  }

  const buttonClassNames = [
    getVariantClassNames(variant),
    fullWidth ? 'w-full' : '',
    'px-5 rounded-[6.25rem] font-normal uppercase border border-solid flex items-center justify-center flex-nowrap',
  ].join(' ');

  return (
    <button {...otherProps} type={type} className={buttonClassNames}>
      {children}
    </button>
  );
}
