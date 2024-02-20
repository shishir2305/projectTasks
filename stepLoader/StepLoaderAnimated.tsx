import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StepLoaderAnimated = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0.0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (loadingProgress < 1.0) {
        setLoadingProgress(prevProgress => prevProgress + 0.1);
      } else {
        if (currentStep < title.length - 1) {
          setCurrentStep(prevStep => prevStep + 1);
          setLoadingProgress(0.0);
        } else {
          clearInterval(timer); // Stop the timer when loading is complete
        }
      }
    }, 500);

    return () => clearInterval(timer);
  }, [currentStep, loadingProgress]);

  const title = [
    'Preparing\nDocument',
    'Organizing\nInformation',
    'Generating\nSummary',
    'Complete'
  ];

  const circleSize = 40;
  const progressHeight = 8.0;
  const titleFontSize = 16;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {title.map((_, index) => (
          <React.Fragment key={index}>
            {circleStepper(index)}
            {index < title.length - 1 && lineStepper(index)}
          </React.Fragment>
        ))}
      </View>
      <View style={styles.row}>
        {title.map((_, index) => (
          <Text key={index} style={styles.titleText}>
            {title[index]}
          </Text>
        ))}
      </View>
    </View>
  );

  function circleStepper(index:any) {
    return (
      <View
        key={`circle_${index}`}
        style={[
          styles.circle,
          {
            backgroundColor: index <= currentStep ? '#007bff' : '#d3e8ff',
          },
        ]}>
        <Text style={styles.circleText}>{index + 1}</Text>
      </View>
    );
  }

  function lineStepper(index:number) {
    return (
      <View
        key={`line_${index}`}
        style={[
          styles.line,
          {
            backgroundColor: index < currentStep ? '#007bff' : '#d3e8ff',
          },
        ]}>
        <View
          style={[
            styles.progress,
            {
              width:
                index === currentStep
                  ? `${loadingProgress * 100}%`
                  : '0%',
            },
          ]}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    color: 'white',
    fontSize: 20,
  },
  line: {
    height: 8,
    flex: 1,
    justifyContent: 'center',
  },
  progress: {
    height: '100%',
    backgroundColor: '#007bff',
  },
  titleText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default StepLoaderAnimated;
