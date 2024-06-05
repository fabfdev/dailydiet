import styled, { css } from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    align-items: center;
`;

export const Header = styled.Text`
    ${({ theme }) => css`
        font-size: ${ theme.FONT_SIZE.XXL }px;
        font-family: ${ theme.FONT_FAMILY.BOLD };
        color: ${theme.COLORS.GRAY_1};
    `}
`;

export const Body = styled.Text`
    ${({ theme }) => css`
        font-size: ${ theme.FONT_SIZE.SM }px;
        font-family: ${ theme.FONT_FAMILY.REGULAR };
        color: ${ theme.COLORS.GRAY_2 };
    `}
`;