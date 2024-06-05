import styled from "styled-components/native";
import { TouchableOpacity, Image } from 'react-native';

export type PercentageRecipeTypeStypeProps = 'PRIMARY' | 'SECONDARY'

type Props = {
    type: PercentageRecipeTypeStypeProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    width: 100%;
    border-radius: 8px;
    background-color: ${({ theme, type }) => type === 'PRIMARY'? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT };
    margin-top: 24px;
    padding: 8px 0px 24px;
`;

export const Icon = styled(Image).attrs<Props>(({ theme, type }) => ({
    tintColor: type === 'PRIMARY'? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
    width: 24px;
    height: 24px;
    align-self: flex-end;
    margin-right: 8px;
`;