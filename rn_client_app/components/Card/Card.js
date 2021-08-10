import React from 'react';
import { Image, StyleSheet, Text, View, Switch } from 'react-native';
import colors from '../../utils/theme/colors';

const Card = ({
  imageSource,
  containerStyle,
  toggleSwitch,
  isEnabled,
  locked,
}) => (
    <View style={[styles.container, containerStyle]}>
      <Image resizeMode="cover" source={imageSource} style={styles.imageStyle} />
      <View style={styles.contentStyle}>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.title}>Friends</Text>
          <Text style={styles.subTitle}>friend@email.com</Text>
        </View>
        <View style={styles.actionContainer}>
          <View style={styles.actionWrapper}>
            <Switch
              trackColor={{ false: colors.red, true: colors.green }}
              thumbColor={colors.white}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <View>
              <Text style={styles.lockedText}>
                {locked ? 'Locked' : 'UnLocked'}
              </Text>
            </View>
          </View>
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
  lockedText: {
    color: colors.green,
  },
  actionContainer: {
    flex: 1,
  },
  actionWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
