import styled from 'styled-components';
import Header from './Header';

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
`;

function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Header />
      <MainContent>{children}</MainContent>
    </LayoutWrapper>
  );
}

export default Layout;
