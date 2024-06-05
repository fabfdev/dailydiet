import styled, { css } from "styled-components/native";

export type InDietButtonStyleProps = 'PRIMARY' | 'SECONDARY' | 'DEFAULT';

type Props = {
    isActive?: boolean;
    buttonStyle: InDietButtonStyleProps;
}

export const Container = styled.View<Props>`
    ${({ theme, isActive, buttonStyle }) => isActive && css`
        border-width: 1px;
        border-color: ${buttonStyle === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
        background-color: ${buttonStyle === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    `};
    ${({ theme, isActive, buttonStyle }) => !isActive && css`
        background-color: ${theme.COLORS.GRAY_6};
    `};
    flex: 1;
    height: 50px;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 0 8px;
`;

export const Icon = styled.View<Props>`
    width: 8px;
    height: 8px;
    background-color: ${({ theme, buttonStyle }) => buttonStyle === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK };
    border-radius: 4px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `};
    margin-left: 4px;
`;