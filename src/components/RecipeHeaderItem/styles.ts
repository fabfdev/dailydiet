import styled, { css } from "styled-components/native";

export const Container = styled.View`
    margin-top: 32px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;