import Layout from '../components/Layout';
import styled from 'styled-components';

const PageWrapper = styled.div`
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #444;
`;

function TemplatePage() {
  return (
    <Layout>
      <PageWrapper>
        <Title>명함 템플릿 고르기</Title>
        <Description>
          가로/세로 방향, 색상, 폰트 등의 템플릿을 보여줄 수 있어요.
        </Description>

        {/* 템플릿 선택 UI는 여기에 구현 */}
      </PageWrapper>
    </Layout>
  );
}

export default TemplatePage;
