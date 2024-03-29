import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { name, image } = props;
  return (
    <SContainer>
      <SImage height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImage = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-weight: bold;
  margin: 0;
  font-size: 18px;
  color: #40514e;
`;
