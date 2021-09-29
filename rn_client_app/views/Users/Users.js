import React from 'react';
import axios from 'axios';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import CardImage from '../../assets/images/cardImage.png';
import Card from '../../components/Card/Card';
import {BASE_URL} from '../../utils/constants';

export const Users = () => {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`${BASE_URL}/users.json`)
      .then(response => {
        setUsers(response.data.data);
      })
      .catch(error => console.log(JSON.stringify(error)));
  }, []);

  const renderUsers = ({ item }) => (
    <Card
      imageSource={CardImage}
      containerStyle={styles.cardContainerStyle}
      type={item?.type}
      title={item?.attributes.name}
      subTitle={item?.attributes.email}
      cardType="user"
      isGuestUser={item?.type === "access_guest"}
      startDate={item?.attributes.starts_at}
      endDate={item?.attributes.ends_at}
    />
  )
  console.log("users::::::", users);
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderUsers}
      />      
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
