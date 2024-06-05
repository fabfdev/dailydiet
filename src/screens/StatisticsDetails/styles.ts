import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const BackIcon = styled.TouchableOpacity`
    border-radius: 20px;
    margin-left: 24px;
`;

export const Icon = styled.Image`
    width: 24px;
    height: 24px;
`;

export const StatisticsContainer = styled.View`
    flex: 1;
    background: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 20px;
    margin-top: 32px;
    padding: 32px 24px;
    align-items: center;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XS}px;
        color: ${theme.COLORS.GRAY_1};
    `}
    margin-bottom: 24px;
`;

export const HorizontalContainer = styled.View`
    flex-direction: row;
`;