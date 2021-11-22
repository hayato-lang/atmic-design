import React from "react";
import styled from "styled-components";
import { SeconderyButton } from "../atoms/button/SeconderyButton";
import { useHistory } from "react-router-dom";

export const Top = () => {
  const history = useHistory();
  const onClickAdmin = () => {
    history.push({ pathname: "/users", state: { isAdmin: true } });
  };
  const onClickGeneral = () => {
    history.push({ pathname: "/users", state: { isAdmin: false } });
  };
  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SeconderyButton onClick={onClickAdmin}>管理者ユーザー</SeconderyButton>
      <br />
      <br />
      <SeconderyButton onClick={onClickGeneral}>一般ユーザー</SeconderyButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
