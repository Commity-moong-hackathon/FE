import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/pagination';

import Card1 from '../assets/images/card1.jpg';
import Card2 from '../assets/images/card2.jpg';
import Card3 from '../assets/images/card3.jpg';

const PageWrapper = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #2d2d2d;
  margin-bottom: 16px;
`;

const StyledSwiper = styled(Swiper)`
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 24px;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 20px;
  border-radius: 8px;
`;

const CreateButton = styled.button`
  padding: 8px 16px;
  background-color: #3b82f6;
  color: white;
  font-size: 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

function HomePage() {
  const navigate = useNavigate();
  const cardId = Date.now().toString();

  const handleCreateClick = () => {
    navigate(`/create/${cardId}`);
  };

  const imageList = [Card1, Card2, Card3];

  return (
    <Layout>
      <PageWrapper>
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

        <CreateButton onClick={handleCreateClick}>내 명함 만들기</CreateButton>
      </PageWrapper>
    </Layout>
  );
}

export default HomePage;
