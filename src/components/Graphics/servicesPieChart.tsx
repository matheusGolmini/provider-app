import React, { useEffect, useState } from 'react';
import { PieChart, PieChartData } from 'react-native-svg-charts';
import { Text } from 'react-native-svg';
import Lybrary, { Dimensions, View } from 'react-native';
import { Service } from '../../mocks';

const { width, height } = Dimensions.get('window');

const ServicesPieChart = ({defaultSize, isText, dataValue} : {defaultSize?: number, isText: boolean, dataValue?: Service[]}) => {
    const [ size, setSize ] = useState<number>(defaultSize ? defaultSize: 300);

    useEffect(() => {
        const valid = size > width || size > height ? false : true;
        if(!valid) {
            setSize(width / 2)
        }
    })

    const data = dataValue ? dataValue : [30, 10, 25, 18, 17];
    const pieData = data.map((value: number | Service, index: number) => ({
        value: typeof value === 'number' ? value : value.serviceAmount,
        key: `${index}-${value}`,
        svg: {
            fill: typeof value === 'number' ?(
                '#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000'
            ).slice(0, 7)
            : value.color
        }
    }))

    const Label = (({slices}: any) => {
        return slices.map((slice: any, index: any) => {
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
            {
                isText
                ? 
                    <View style={styles.container}>
                        <Lybrary.Text style={styles.text} >Serviços Realizados</Lybrary.Text>
                    </ View>
                : <Lybrary.Text />
            }
           
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
        color: '#37b7dc'
    }
})


export default ServicesPieChart;