import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/pagination';

import Card1 from '../assets/images/temp_width_1.png';
import Card2 from '../assets/images/temp_width_1.png';
import Card3 from '../assets/images/card3.jpg';

const PageWrapper = styled.div`
  padding: 16px;
`;

const Title_1 = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
  margin-left: 10px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
  margin-left: 10px;
`;

const StyledSwiper = styled(Swiper)`
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 24px;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 25px;
  border-radius: 3px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CreateButton = styled.button`
  padding: 15px 16px;
  background-color: #07b690;
  color: black;
  font-size: 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  width: 90%;
  font-weight: bold;
  margin-top: 26px;
`;

function HomePage() {
  const navigate = useNavigate();
  const cardId = Date.now().toString();

  const handleCreateClick = () => {
    navigate(`/select-template/${cardId}`);
  };

  const imageList = [Card1, Card2, Card3];

  return (
    <Layout>
      <PageWrapper>
        <Title_1>대학생을 위한 쉽고 빠른 명함!</Title_1>
        <StyledSwiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={10}>
          {imageList.map((src, index) => (
            <SwiperSlide key={index}>
              <CardImage
                src={src}
                alt={`slide-${index}`}
              />
            </SwiperSlide>
          ))}
        </StyledSwiper>
        <Title>명함 만들기</Title>
        <ButtonWrapper>
          <CreateButton onClick={handleCreateClick}>시작하기</CreateButton>
        </ButtonWrapper>
      </PageWrapper>
    </Layout>
  );
}

export default HomePage;
