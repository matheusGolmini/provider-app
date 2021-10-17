import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IConstractResponse } from "../../service/api/contract-service";
import { RatingService } from "../../service/api/rating-service";

interface Reating {
  value: boolean;
  sizeWidth: number;
  sizeHeight: number;
  ratingNumber?: number;
  contract?: IConstractResponse;
}

export default function Rating({
  value,
  sizeWidth,
  sizeHeight,
  ratingNumber,
  contract,
}: Reating) {
  const maxReating = [1, 2, 3, 4, 5];
  const [defaultRating, setDefaultRating] = useState<number>(0);
  const [ratingId, setRatingId] = useState<string>();
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  useEffect(() => {
    if (!!contract) {
      RatingService.getRatingByContractId(contract.id)
        .then((value) => {
          if(!!value) {
            setDefaultRating(value.rating);
            setRatingId(value.id);
            setIsUpdate(true);
          }
        })
        .catch(() => {
          setIsUpdate(false);
        });
    }
    if (!!ratingNumber) {
      setDefaultRating(ratingNumber);
    }
  }, []);

  function controlRating(num: number) {
    if (num === defaultRating) {
      setDefaultRating(defaultRating - 1);
      saveOrUpdateRating(defaultRating - 1);
    } else {
      setDefaultRating(num);
      saveOrUpdateRating(num);
    }
  }

  async function saveOrUpdateRating(rating: number) {
    try {
      if (!!contract) {
        if (!isUpdate) {
          const res = await RatingService.createRating({
            contract: contract.id,
            ratedPerson: contract.Person.id,
            rating: rating,
          });
          setIsUpdate(true);
          setRatingId(res.id);
        } else {
          await RatingService.updateRating(
            {
              rating,
            },
            String(ratingId)
          );
        }
      }
    } catch (error: any) {
      console.log(error.response.data);
    }
  }

  return (
    <View style={styles.customRatingBarStyle}>
      {maxReating.map((item, key) => {
        return value ? (
          <TouchableOpacity
            activeOpacity={0.7}
            key={key}
            onPress={() => controlRating(item)}
          >
            <Image
              style={{ height: sizeHeight, width: sizeWidth }}
              key={key}
              source={
                item <= defaultRating
                  ? require("../../assets/rating/star_filled.png")
                  : require("../../assets/rating/star_corner.png")
              }
            />
          </TouchableOpacity>
        ) : (
          <Image
            style={{ height: sizeHeight, width: sizeWidth }}
            key={key}
            source={
              item <= defaultRating
                ? require("../../assets/rating/star_filled.png")
                : require("../../assets/rating/star_corner.png")
            }
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  customRatingBarStyle: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
    marginVertical: 10,
  },
  starImgStyle: {
    borderColor: "red",
    borderWidth: 10,
    width: 10,
    height: 10,
    resizeMode: "cover",
  },
});
