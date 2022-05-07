import styled from 'styled-components';

interface TypographyProps {
  type: 'h1' | 'h2' | 'subtitle1' | 'b1' | 'b2' | 'caption';
  fontFamily?: 'Noto Sans KR' | 'Poppins';
  fontWeight?: 300 | 400 | 500 | 600 | 700 | 800;
  color?: string;
  textAlign?: 'left' | 'center' | 'right';
}

const Typography = styled.span<TypographyProps>`
  ${({ theme, type }) => theme.typography[type]};
  font-family: ${({ fontFamily }) => fontFamily || 'Poppins'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color, theme }) => (color ? theme.color[color] : '#000')};
  display: block;
  margin: 0;
  padding: 0;
`;

export default Typography;
