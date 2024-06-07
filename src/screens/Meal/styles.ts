import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const ContentContainer = styled.View`
    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    border-radius: 20px;
    flex: 1;
    margin-top: 12px;
    padding-top: 40px;
`;

export const VerticalSpacer = styled.View`
    margin-top: 16px;
`;

export const HorizontalContainer = styled.View`
    flex-direction: row;
    margin: 0 16px;
`;