import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { getUserMock, UserService } from "../../mocks";
import { isSaveAddress } from "../../mocks/index";

const Help = () => {
  const [userService, setUserService] = useState<UserService | undefined>(
    undefined
  );
  const [isModalAddressVisible, setIsModalAddressVisible] =
    useState<boolean>(false);

  useEffect(() => {
    setUserService(getUserMock());
    setIsModalAddressVisible(isSaveAddress ? false : true);
  }, []);

  return <View></View>;
};

export default Help;
