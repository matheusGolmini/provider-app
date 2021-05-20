import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import { Text } from 'react-native-svg';


const Home = () => {
    const data = [30, 10, 25, 18, 17, 10, 10, 100];
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
        <View style={{ flex: 1, justifyContent: 'center',}}>
            <PieChart style={{height: 350}} data={pieData}>
                <Label />
            </PieChart>
            {/* <Text style={styles.text}>Home</Text> */}
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

export default Home;