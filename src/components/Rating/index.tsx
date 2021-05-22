import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Reating {
    value: boolean;
    sizeWidth: number;
    sizeHeight: number;
    ratingNumber?: number;
}

export default function Reating({value, sizeWidth, sizeHeight, ratingNumber}: Reating) {
    const [ maxReating, setMaxReating ] = useState<number[]>([1,2,3,4,5]);
    const [ defaultRating, setDefaultRating ] = useState<number>(!!ratingNumber ? ratingNumber: 0 );
    
    function controlRating(num: number) {
        if(num === defaultRating) {
            setDefaultRating(defaultRating - 1)
        }else {
            setDefaultRating(num)
        }
    }

    return (
        <View style={styles.customRatingBarStyle}>
            {
                maxReating.map((item, key) => {
                    return(
                        value 
                        ? <TouchableOpacity
                            activeOpacity={0.7}
                            key={key}
                            onPress={() => controlRating(item)}
                        >
                            <Image
                                style={{height: sizeHeight, width: sizeWidth}}
                                key={key} 
                                source={
                                item <= defaultRating
                                    ? require('../../assets/rating/star_filled.png')
                                    : require('../../assets/rating/star_corner.png')
                            }/>

                        </TouchableOpacity>

                        : <Image 
                            style={{height: sizeHeight, width: sizeWidth}}
                            key={key}
                            source={
                            item <= defaultRating
                                ? require('../../assets/rating/star_filled.png')
                                : require('../../assets/rating/star_corner.png')
                        }/>
                    )
                })
            }
        </View>
    )
}

const styles =  StyleSheet.create({
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10,
        marginVertical: 10,
    },
    starImgStyle: {
        borderColor: 'red',
        borderWidth: 10,
        width: 10,
        height: 10,
        resizeMode: 'cover'
    }
});
