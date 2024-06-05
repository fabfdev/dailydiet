import styled, { css } from "styled-components/native";

export type GeneralStatisticsStyleTypeProps = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

type Props = {
    type: GeneralStatisticsStyleTypeProps;
}

export const Container = styled.View<Props>`
    width: 100%;
    flex: 1;
    ${({ theme, type }) => css`
        background-color: ${type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : type === 'SECONDARY' ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_6};
        max-height: ${type === 'TERTIARY' ? 89 : 127}px;
    `}
    min-height: 89px;
    margin-bottom: 8px;
    border-radius: 8px;
    padding: 24px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL}px;
        color: ${theme.COLORS.GRAY_1};
    `}
`;

export const Body = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_2};
    `}
    text-align: center;
`;