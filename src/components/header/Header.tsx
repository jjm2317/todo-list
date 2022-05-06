import Typography from 'components/typography/Typography';
import styled from 'styled-components';

interface Props {
  title: string;
  subtitle?: string;
}

const Header = ({ title, subtitle }: Props) => (
  <Container>
    <Typography as="h1" type="h1">
      {title}
    </Typography>
    {subtitle && (
      <Typography
        as="p"
        type="subtitle1"
        data-testid="subtitle"
        fontFamily="Noto Sans KR"
      >
        {subtitle}
      </Typography>
    )}
  </Container>
);

export default Header;

const Container = styled.header`
  height: 100px;
`;
