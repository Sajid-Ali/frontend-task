import React from 'react';
import axios from 'axios';
import {View, FlatList, StyleSheet} from 'react-native';
import CardImage from '../../assets/images/cardImage.png';
import Card from '../../components/Card/Card';
import {BASE_URL} from '../../utils/constants';

export const Devices = () => {
  const [devices, setDevices] = React.useState([]);
  const [isEnabled, setIsEnabled] = React.useState(false);
  React.useEffect(() => {
    axios
      .get(`${BASE_URL}/devices.json`)
      .then(response => {
        const result = response?.data?.data?.map(row => ({
          ...row,
          isLocked: row?.type === 'lock' && true || false,
        }));
        setDevices(result);
      })
      .catch(error => console.log(JSON.stringify(error)));
  }, []);

  const renderUsers = ({item}) => (
    <Card
      imageSource={CardImage}
      containerStyle={styles.cardContainerStyle}
      type={item?.type}
      title={item?.attributes.name}
      subTitle={item?.attributes.model_number}
      cardType="device"
      locked={item?.isLocked}
      toggleSwitch={() => {
        const data = [];
        devices.forEach(row => {
          if (row.id === item.id) {
            data.push({
              ...row,
              isLocked: !row.isLocked,
              type: row.type === 'lock' ? 'unlock' : 'lock',
            });
          } else {
            data.push(row);
          }
        });
        setDevices(data);
        setIsEnabled(!isEnabled);
      }}
      isEnabled={item?.isLocked}
    />
  );
  console.log(devices, 'devices');
  return (
    <View style={styles.container}>
      <FlatList data={devices} renderItem={renderUsers} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 15,
  },
  cardContainerStyle: {
    marginBottom: 15,
  },
});
