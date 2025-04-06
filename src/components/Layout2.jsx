import styled from 'styled-components';
import Header2 from './Header2';

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

function Layout2({ children }) {
  return (
    <LayoutWrapper>
      <Header2 />
      <MainContent>{children}</MainContent>
    </LayoutWrapper>
  );
}

export default Layout2;
