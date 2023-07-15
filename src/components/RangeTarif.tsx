import SliderMinute from './SliderRange/SliderMinute';
import SliderInternet from './SliderRange/SliderInternet';
import SliderSms from './SliderRange/SliderSms';
import styled from 'styled-components';

const Container = styled.div`
  width: 700px;
  margin-left: 30px;
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