import { Header } from "../atoms/layout/Header";

export function HeaderOnly(props) {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
}
