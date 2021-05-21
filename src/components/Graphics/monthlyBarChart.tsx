import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { XAxis, Grid, YAxis, BarChart } from 'react-native-svg-charts';
import UtilsDate from '../../utils/date';

const { width } = Dimensions.get('window');

const MonthlyBarChart = () => {
    const [ sizeHeight, setSizeHeight] = useState<number>(350)
    const [ sizeWidth, setSizeWidth] = useState<number>(350)

    useEffect(() => {
        const validWidth = sizeWidth > width ? false : true;
        if(!validWidth) {
            setSizeWidth(width - 40)
            setSizeHeight(width -40)
        }
    })

    const contentInset = { top: 30, bottom: 30 }
    const fill = 'rgb(134, 65, 244)'

    const data = [ 10, 0, 0, 0, 0, 0, 20, 0, 0, 0, 1, 100]

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.text}> Gráfico de ganhos por mês</Text>
            <View style={{ flexDirection: 'row' }}>

                <YAxis
                    data={data}
                    contentInset={contentInset}
                    svg={{
                        fill: 'black',
                        fontSize: 10,
                        fontWeight: 'bold'
                    }}
                    style={{height: sizeHeight, flexDirection: 'row'}}
                    numberOfTicks={10}
                    formatLabel={(value) => `R$ ${value}`}
                /> 
                <BarChart style={{ height: sizeHeight, width: sizeWidth }} data={data} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
            
                    <Grid belowChart={false}/>
                </BarChart>
            </View>
            <XAxis
                style={{ width: sizeWidth, marginLeft: 30 }}
                data={data}
                formatLabel={(__, index) => UtilsDate.getTheAcronymOfTheMonth(index)}
                contentInset={{ left: 15, right: 15 }}
                svg={{ fontSize: 10, fill: 'black', fontWeight: 'bold'}}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default MonthlyBarChart;