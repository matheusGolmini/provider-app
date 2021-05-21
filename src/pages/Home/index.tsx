import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ServicesPieChart from '../../components/Graphics/servicesPieChart';
import MonthlyBarChart from '../../components/Graphics/monthlyBarChart';
import Reating from '../../components/Rating';



const Home = () => {

    return(
        <View style={{...styles.container, marginVertical: 20}}>
            <Reating value={false} sizeHeight={40} sizeWidth={40} userId={'123'}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <MonthlyBarChart />
                <View style={{marginTop: 50}}/>
                <ServicesPieChart /> 
            
            </ScrollView>
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default Home;