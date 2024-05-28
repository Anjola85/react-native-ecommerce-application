import React from "react";
import UserAddress from "./UserAddress";
import { AddressRespDto } from "../../../../../api/api-contracts/user/responses/address.response";

interface UserAddressesContainerProps {
  selectedExistingAddresses: AddressRespDto[];
  primaryAddress: AddressRespDto;
  handleSelectPrimaryAddress: (address: AddressRespDto) => void;
}

const UserAddressesContainer: React.FC<UserAddressesContainerProps> = ({
  selectedExistingAddresses,
  primaryAddress,
  handleSelectPrimaryAddress,
}) => {
  return (
    <>
      {selectedExistingAddresses.map((address, index) => {
        return (
          <UserAddress
            isSelected={address.id === primaryAddress.id}
            address={address}
            hasSeperator={index !== selectedExistingAddresses.length - 1}
            setAsPrimary={handleSelectPrimaryAddress}
            key={index}
          />
        );
      })}
    </>
  );
};

export default UserAddressesContainer;
