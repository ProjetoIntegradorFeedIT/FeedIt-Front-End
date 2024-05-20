import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withRepeat, withTiming } from 'react-native-reanimated';

export default function Spinner() {
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  React.useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 1000,
        easing: Easing.linear,
      }),
      -1 // Repetir infinitamente
    );
  }, []);

  return <Animated.View style={[styles.spinner, animatedStyle]} />;
}

const styles = StyleSheet.create({
  spinner: {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 50,
    borderTopColor: 'transparent',
  },
});
