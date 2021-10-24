import React, { useEffect, useState } from "react";
import { PieChart } from "react-native-svg-charts";
import { Text } from "react-native-svg";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

interface Service {
  color: string;
  serviceAmount: number;
}

const ServicesPieChart = ({
  defaultSize,
  isText,
  dataValue,
}: {
  defaultSize?: number;
  isText: boolean;
  dataValue: Service[];
}) => {
  const [size, setSize] = useState<number>(defaultSize ? defaultSize : 300);
  console.log('aqui 2: ', dataValue);
  useEffect(() => {
    const valid = size > width || size > height ? false : true;
    if (!valid) {
      setSize(width / 2);
    }
  });

  const pieData = dataValue.map((value: Service, index: number) => ({
    value: value.serviceAmount === 0 ? 0.5:value.serviceAmount,
    key: `${index}-${value}`,
    svg: {
      fill: value.color,
    },
  }));

  const Label = ({ slices }: any) => {
    return slices.map((slice: any, index: any) => {
      const { pieCentroid, data } = slice;
      return (
        <Text
          key={`label-${index}`}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill="black"
          textAnchor={"middle"}
          alignmentBaseline={"middle"}
          fontSize={22}
        >
          {data.value === 0.5 ? 0 : data.value}
        </Text>
      );
    });
  };

  return (
    <PieChart style={{ height: size, marginTop: 10 }} data={pieData}>
      <Label />
    </PieChart>
  );
};

export default ServicesPieChart;
