import React from 'react';

export interface Props {
  children: JSX.Element;
}

const Parent: React.FC<Props> = React.memo(({ children }) => {
  console.log('parent component');
  return (
    <div>
      <p>Parent</p>
      {children}
    </div>
  );
});

export default Parent;
