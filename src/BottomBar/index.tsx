import React from 'react';

interface Props {
  children: React.ReactNode | React.ReactText;
}
const BottomBar: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
export default BottomBar;
