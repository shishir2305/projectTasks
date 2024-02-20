import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CaseStrategyContent from './CaseStrategyContent';
import HorizontalNormalLine from './HorizontalNormalLine';

const JudgeContent = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{marginBottom: 15}}>
          Specific Legal Strategy for the Case Add Judge
        </Text>
      </View>

      <View>
        <Text style={styles.heading}>
          1 Emphasize Nuanced Consideration of Motive
        </Text>
        <CaseStrategyContent
          content={
            "Given Judge Chandrachud's commitment to considering the nuanced aspects of cases, emphasize that the motive behind the crime should be thoroughly examined. Argue that a comprehensive understanding of the familial dynamics and financial circumstances is crucial for a fair judgmentf"
          }
        />
        <CaseStrategyContent
          content={
            "Given Judge Chandrachud's commitment to considering the nuanced aspects of cases, emphasize that the motive behind the crime should be thoroughly examined. Argue that a comprehensive understanding of the familial dynamics and financial circumstances is crucial for a fair judgmentf"
          }
        />
      </View>

      <View>
        <Text style={styles.heading}>
          2 Highlight Social and Economic Factors
        </Text>
        <CaseStrategyContent
          content={
            "Frame the case in a way that draws attention to potential social and economic factors that might have influenced the sister's actions. Emphasize any hardships or pressures she may have faced, aligning with Judge Chandrachud's known consideration of socio-economic context in judicial decisions."
          }
        />
      </View>

      <View>
        <Text style={styles.heading}>
          3 Invoke Human Rights and Fair Trial Principlel
        </Text>
        <CaseStrategyContent
          content={
            "Incorporate arguments related to human rights, emphasizing the right to a fair trial. Highlight the importance of ensuring that the defendant's circumstances are thoroughly considered, aligning with Judge Chandrachud's views on protecting individual rights."
          }
        />
      </View>

      <View>
        <Text style={styles.heading}>4 Question Intent and Premeditation</Text>
        <CaseStrategyContent
          content={
            "Argue that a careful analysis of the evidence is essential to determine the sister's intent and whether the act was premeditated. Emphasize the need for a nuanced understanding of the circumstances leading to the crime, aligning with Judge Chandrachud's meticulous approach."
          }
        />
      </View>

      <View>
        <Text style={styles.heading}>
          5 Advocate for a Comprehensive Sentencing Evaluation
        </Text>
        <CaseStrategyContent
          content={
            "Request a comprehensive evaluation of sentencing, taking into account the complex familial dynamics and potential mitigating factors. Align this request with Judge Chandrachud's previous judgments that reflect a consideration of individual circumstances in sentencing."
          }
        />
      </View>

      <View>
        <Text style={styles.heading}>
          6 Explore Possibilities of Rehabilitation
        </Text>
        <CaseStrategyContent
          content={
            "Emphasize the potential for rehabilitation and reform, advocating for a sentencing approach that aligns with Judge Chandrachud's views on the possibility of redemption. Highlight any factors that suggest the sister can be reintegrated into society positively."
          }
        />
      </View>

      <View>
        <Text style={styles.heading}>
          7 Argue Against a Hasty or Harsh Sentence
        </Text>
        <CaseStrategyContent
          content={
            "Caution against a hasty or harsh sentencing decision, urging the court to consider the complexity of familial relationships and the potential impact on the sister's life. Align this argument with Judge Chandrachud's known emphasis on careful deliberation in legal matters."
          }
        />
      </View>

      <View>
        <Text style={styles.heading}>8 Refer to Relevant Legal Precedents</Text>
        <CaseStrategyContent
          content={
            "Cite legal precedents that align with Judge Chandrachud's views on sentencing and the consideration of individual circumstances. Draw parallels between similar cases where nuanced considerations led to more lenient or rehabilitative sentencing."
          }
        />
      </View>

      <View>
        <Text style={styles.heading}>
          9 Address Mental Health Considerationl
        </Text>
        <CaseStrategyContent
          content={
            "If applicable, explore the possibility of mental health considerations that might have played a role in the sister's actions. Align this argument with Judge Chandrachud's views on the importance of mental health in the criminal justice system."
          }
        />
      </View>

      <View>
        <Text style={styles.heading}>10 Craft a Humanizing Narrative</Text>
        <CaseStrategyContent
          content={
            "Craft a narrative that humanizes the sister, portraying her as a complex individual facing challenges rather than solely focusing on the criminal act. Align this narrative with Judge Chandrachud's known commitment to understanding the human aspects of legal cases."
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  heading: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default JudgeContent;
