import SliderMinute from './SliderRange/SliderMinute';
import SliderInternet from './SliderRange/SliderInternet';
import SliderSms from './SliderRange/SliderSms';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin-left: 30px;
  margin-right: 20px;
  @media (max-width: 773px) {
    max-width: 400px;
  }
`;

const RangeTarif: React.FC = () => {
    return (
        <Container>
            <SliderMinute />
            <SliderInternet />
            <SliderSms />
        </Container>
    );
};

export default RangeTarif;