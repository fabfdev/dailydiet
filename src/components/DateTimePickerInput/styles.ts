import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 0 8px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_2};
    `};
`;

export const ContainerInput = styled.TextInput`
    height: 48px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_5};
    border-radius: 6px;
    border-width: 1px;
    padding: 16px;
`;