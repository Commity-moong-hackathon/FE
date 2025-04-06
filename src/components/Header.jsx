import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100%;
  min-height: 100px;
  padding: 0 24px;
  background-color: #07b690;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo>툭</Logo>
    </HeaderWrapper>
  );
}

export default Header;
