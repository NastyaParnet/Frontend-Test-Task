import React from 'react';

type Props = {
  error: string;
  fullHeight?: boolean;
};

export const Error = (props: Props) => {
  const { error, fullHeight = true } = props;

  return (
    <p
      className={`${
        fullHeight ? 'min-h-[30px]' : 'min-h-[24px]'
      } text-sm font-normal text-darkRed mt-0.5`}
    >
      {error}
    </p>
  );
};
