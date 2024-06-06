import styled, { css } from "styled-components/native";

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Header = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GREEN_DARK};
    `};
`;

export const SubTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_1};
    `};
    margin-top: 8px;
`;

export const BoldSubTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Img = styled.Image`
    margin: 32px 0;
`;