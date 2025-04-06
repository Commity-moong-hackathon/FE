import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeaderWrapper = styled.header`
  width: 100%;
  padding: 10px 16px;
  background-color: #07b690;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100px;
  box-sizing: border-box;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
  padding-top: 4px;
  margin-top: 40px;
`;

const SaveButton = styled.button`
  background: white;
  border: none;
  padding: 6px 13px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  color: #07b690;
  margin-top: 40px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

function Header2() {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <BackButton onClick={() => navigate(-1)}>{'‹'}</BackButton>
      <SaveButton>저장</SaveButton>
    </HeaderWrapper>
  );
}

export default Header2;
