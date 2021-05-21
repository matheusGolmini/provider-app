import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { XAxis, Grid, YAxis, BarChart } from 'react-native-svg-charts';
import UtilsDate from '../../utils/date';

const MonthlyBarChart = () => {


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
                    style={{height: 350, flexDirection: 'row'}}
                    numberOfTicks={10}
                    formatLabel={(value) => `R$ ${value}`}
                /> 
                <BarChart style={{ height: 350, width: 350 }} data={data} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
            
                    <Grid belowChart={false}/>
                </BarChart>
            </View>
            <XAxis
                style={{ width: 350, marginLeft: 30 }}
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