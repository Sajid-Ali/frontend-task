import React from 'react';
import {Image, StyleSheet, Text, View, Switch} from 'react-native';
import colors from '../../utils/theme/colors';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

const Card = ({
  imageSource,
  containerStyle,
  toggleSwitch,
  isEnabled,
  locked,
  title,
  subTitle,
  cardType,
  isGuestUser,
  startDate,
  endDate,
}) => (
  <View style={[styles.container, containerStyle]}>
    <Image resizeMode="cover" source={imageSource} style={styles.imageStyle} />
    <View style={styles.contentStyle}>
      <View style={{marginBottom: 20}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
        {isGuestUser && (
          <Text>{`${Moment(startDate).format('MMMM Do, h:mm')} - ${Moment(
            endDate,
          ).format('MMMM Do, h:mm')}`}</Text>
        )}
      </View>
      <View style={styles.actionContainer}>
        {cardType === 'user' && (
          <View>
            <View style={styles.userStatusWrapper(isGuestUser)}>
              <Text style={styles.statusText(isGuestUser)}>
                {isGuestUser ? 'UPCOMING' : 'ACTIVE'}
              </Text>
            </View>
          </View>
        )}

        {cardType === 'device' && (
          <View style={styles.actionWrapper}>
            <Switch
              trackColor={{false: colors.red, true: colors.green}}
              ios_backgroundColor={colors.red}
              thumbColor={colors.white}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <View style={styles.deviceStatusWrapper}>
              <Icon
                name={locked ? 'lock-closed-sharp' : 'lock-open-outline'}
                size={20}
                color={locked ? colors.green : colors.red}
              />
              <Text style={styles.lockedText(isEnabled)}>
                {locked ? 'Locked' : 'UnLocked'}
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  </View>
);

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    padding: 10,
  },
  contentStyle: {
    flex: 1,
    marginStart: 20,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subTitle: {
    color: colors.grey,
    fontSize: 16,
  },
  lockedText: isEnabled => ({
    color: isEnabled ? colors.green : colors.red,
    marginStart: 5
  }),
  actionContainer: {
    flex: 1,
  },
  actionWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userStatusWrapper: isGuestUser => ({
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: 120,
    height: 35,
    borderRadius: 20,
    backgroundColor: isGuestUser ? colors.upcoming : colors.active,
    justifyContent: 'center',
    marginEnd: 10,
  }),
  statusText: isGuestUser => ({
    color: isGuestUser ? colors.upcomingText : colors.activeText,
    textAlign: 'center',
  }),
  deviceStatusWrapper: {
    flexDirection: 'row',
    alignItems: 'baseline'
  }
});
