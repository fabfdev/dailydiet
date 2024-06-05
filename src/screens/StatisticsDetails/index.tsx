import { PercentageRecipeHeader } from '@components/PercentageRecipeHeader';
import { Container, BackIcon, Icon, StatisticsContainer, Title, HorizontalContainer } from './styles';
import { View } from 'react-native';

import imgBackButton from '@assets/arrow_left.png';
import { GeneralStatistics } from '@components/GeneralStatistics';

export function StatisticsDetails() {
    return (
        <Container>
            <BackIcon>
                <Icon source={imgBackButton} />
            </BackIcon>
            <PercentageRecipeHeader />
            <StatisticsContainer >
                <Title>Estatísticas gerais</Title>
                <GeneralStatistics />
                <GeneralStatistics />
                <HorizontalContainer>
                    <GeneralStatistics type='PRIMARY'/>
                    <View style={{ width: 8 }} />
                    <GeneralStatistics type='SECONDARY'/>
                </HorizontalContainer>
            </StatisticsContainer>
        </Container>
    )
}