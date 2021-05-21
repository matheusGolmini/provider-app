import React, { useEffect, useState } from 'react';
import { PieChart } from 'react-native-svg-charts';
import { Text } from 'react-native-svg';
import Lybrary, { Dimensions, View } from 'react-native';

const { width, height } = Dimensions.get('window');



const ServicesPieChart = () => {
    const [ size, setSize ] = useState<number>(300)

    useEffect(() => {
        const valid = size > width || size > height ? false : true;
        if(!valid) {
            setSize(width / 2)
        }
    })

    const data = [30, 10, 25, 18, 17];
    const pieData = data.map((value, index) => ({
        value,
        key: `${index}-${value}`,
        svg: {
            fill: (
                '#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000'
            ).slice(0, 7)
        }
    }))

    const Label = (({slices}: any) => {
        return slices.map((slice: any, index: number) => {
            const { pieCentroid, data } = slice;
            return (
                <Text
                    key={`label-${index}`}
                    x={pieCentroid[0]}
                    y={pieCentroid[1]}
                    fill="black"
                    textAnchor={'middle'}
                    alignmentBaseline={'middle'}
                    fontSize={22}
                >
                    {data.value}
                </Text>
            );
        })
    });

    return(
        <>
            <View style={styles.container}>
                <Lybrary.Text style={styles.text} >Gráfico de Serviços Realizados</Lybrary.Text>
            </ View>
                <PieChart style={{height: size, marginTop: 10}} data={pieData}>
                    <Label />
                </PieChart>
        </>
        
    )
}

const styles = Lybrary.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    }
})


export default ServicesPieChart;