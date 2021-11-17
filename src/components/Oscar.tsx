type OscarProps = {
  // children: JSX.Element | JSX.Element[];
  children: React.ReactNode;
};

export const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};
