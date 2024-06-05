import styled, { css } from "styled-components/native";

export type RecipeIndicatorTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: RecipeIndicatorTypeStyleProps;
}

export const Container = styled.View`
    width: 100%;
    border-width: 1px;
    border-radius: 6px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_5};
    min-height: 49px;
    flex-direction: row;
    align-items: center;
    padding: 0 12px;
    margin-top: 8px;
`;

export const Time = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XS}px;
        color: ${theme.COLORS.GRAY_1};
    `}
`;

export const Spacer = styled.View`
    width: 1px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_4};
    height: 10px;
    margin: 0 10px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_2};
    `}
    flex: 1;
`;

export const Indicator = styled.View<Props>`
    height: 14px;
    width: 14px;
    border-radius: 7px;
    background-color: ${({ theme, type }) => type === "PRIMARY" ?  theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;