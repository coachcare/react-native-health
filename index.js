import { Activities, Observers, Permissions, Units } from './src/constants'
import { Platform } from 'react-native'

const { AppleHealthKit } = require('react-native').NativeModules

const noop = (...args) => {
  console.warn('HealthKit is not available on Android.')
}

const noopPromise = (...args) => {
  console.warn('HealthKit is not available on Android.')
  return Promise.resolve(false)
}

export const HealthKit =
  Platform.OS !== 'ios'
    ? {
        // All methods that would normally exist on iOS now return a no-op
        initHealthKit: noopPromise,
        isAvailable: noopPromise,
        getBiologicalSex: noopPromise,
        getBloodType: noopPromise,
        getDateOfBirth: noopPromise,
        getLatestWeight: noopPromise,
        getWeightSamples: noopPromise,
        saveWeight: noopPromise,
        getLatestHeight: noopPromise,
        getHeightSamples: noopPromise,
        saveHeight: noopPromise,
        getLatestWaistCircumference: noopPromise,
        getWaistCircumferenceSamples: noopPromise,
        saveWaistCircumference: noopPromise,
        getLatestPeakFlow: noopPromise,
        getPeakFlowSamples: noopPromise,
        savePeakFlow: noopPromise,
        saveLeanBodyMass: noopPromise,
        getLatestBmi: noopPromise,
        getBmiSamples: noopPromise,
        saveBmi: noopPromise,
        getLatestBodyFatPercentage: noopPromise,
        getBodyFatPercentageSamples: noopPromise,
        getLatestLeanBodyMass: noopPromise,
        getLeanBodyMassSamples: noopPromise,
        getStepCount: noopPromise,
        getSamples: noopPromise,
        getAnchoredWorkouts: noopPromise,
        getDailyStepCountSamples: noopPromise,
        saveSteps: noopPromise,
        saveWalkingRunningDistance: noopPromise,
        getDistanceWalkingRunning: noopPromise,
        getDailyDistanceWalkingRunningSamples: noopPromise,
        getDistanceCycling: noopPromise,
        getDailyDistanceCyclingSamples: noopPromise,
        getFlightsClimbed: noopPromise,
        getDailyFlightsClimbedSamples: noopPromise,
        getEnergyConsumedSamples: noopPromise,
        getProteinSamples: noopPromise,
        getFiberSamples: noopPromise,
        getTotalFatSamples: noopPromise,
        saveFood: noopPromise,
        saveWater: noopPromise,
        getWater: noopPromise,
        saveHeartRateSample: noopPromise,
        getWaterSamples: noopPromise,
        getHeartRateSamples: noopPromise,
        getRestingHeartRate: noopPromise,
        getWalkingHeartRateAverage: noopPromise,
        getActiveEnergyBurned: noopPromise,
        getBasalEnergyBurned: noopPromise,
        getAppleExerciseTime: noopPromise,
        getAppleStandTime: noopPromise,
        getVo2MaxSamples: noopPromise,
        getBodyTemperatureSamples: noopPromise,
        getBloodPressureSamples: noopPromise,
        getRespiratoryRateSamples: noopPromise,
        getHeartRateVariabilitySamples: noopPromise,
        getHeartbeatSeriesSamples: noopPromise,
        getRestingHeartRateSamples: noopPromise,
        getBloodGlucoseSamples: noopPromise,
        getCarbohydratesSamples: noopPromise,
        saveBloodGlucoseSample: noopPromise,
        saveCarbohydratesSample: noopPromise,
        deleteBloodGlucoseSample: noopPromise,
        deleteCarbohydratesSample: noopPromise,
        getSleepSamples: noopPromise,
        getInfo: noopPromise,
        getMindfulSession: noopPromise,
        saveMindfulSession: noopPromise,
        getWorkoutRouteSamples: noopPromise,
        saveWorkout: noopPromise,
        getAuthStatus: noopPromise,
        getLatestBloodAlcoholContent: noopPromise,
        getBloodAlcoholContentSamples: noopPromise,
        saveBloodAlcoholContent: noopPromise,
        getDistanceSwimming: noopPromise,
        getDailyDistanceSwimmingSamples: noopPromise,
        getOxygenSaturationSamples: noopPromise,
        getElectrocardiogramSamples: noopPromise,
        saveBodyFatPercentage: noopPromise,
        saveBodyTemperature: noopPromise,
        getEnvironmentalAudioExposure: noopPromise,
        getHeadphoneAudioExposure: noopPromise,
        getClinicalRecords: noopPromise,
        getActivitySummary: noopPromise,
        getInsulinDeliverySamples: noopPromise,
        saveInsulinDeliverySample: noopPromise,
        deleteInsulinDeliverySample: noopPromise,
        // Still export the constants even on Android
        Constants: {
          Activities,
          Observers,
          Permissions,
          Units,
        },
      }
    : {
        initHealthKit: AppleHealthKit.initHealthKit,
        isAvailable: AppleHealthKit.isAvailable,
        getBiologicalSex: AppleHealthKit.getBiologicalSex,
        getBloodType: AppleHealthKit.getBloodType,
        getDateOfBirth: AppleHealthKit.getDateOfBirth,
        getLatestWeight: AppleHealthKit.getLatestWeight,
        getWeightSamples: AppleHealthKit.getWeightSamples,
        saveWeight: AppleHealthKit.saveWeight,
        getLatestHeight: AppleHealthKit.getLatestHeight,
        getHeightSamples: AppleHealthKit.getHeightSamples,
        saveHeight: AppleHealthKit.saveHeight,
        getLatestWaistCircumference: AppleHealthKit.getLatestWaistCircumference,
        getWaistCircumferenceSamples:
          AppleHealthKit.getWaistCircumferenceSamples,
        saveWaistCircumference: AppleHealthKit.saveWaistCircumference,
        getLatestPeakFlow: AppleHealthKit.getLatestPeakFlow,
        getPeakFlowSamples: AppleHealthKit.getPeakFlowSamples,
        savePeakFlow: AppleHealthKit.savePeakFlow,
        saveLeanBodyMass: AppleHealthKit.saveLeanBodyMass,
        getLatestBmi: AppleHealthKit.getLatestBmi,
        getBmiSamples: AppleHealthKit.getBmiSamples,
        saveBmi: AppleHealthKit.saveBmi,
        getLatestBodyFatPercentage: AppleHealthKit.getLatestBodyFatPercentage,
        getBodyFatPercentageSamples: AppleHealthKit.getBodyFatPercentageSamples,
        getLatestLeanBodyMass: AppleHealthKit.getLatestLeanBodyMass,
        getLeanBodyMassSamples: AppleHealthKit.getLeanBodyMassSamples,
        getStepCount: AppleHealthKit.getStepCount,
        getSamples: AppleHealthKit.getSamples,
        getAnchoredWorkouts: AppleHealthKit.getAnchoredWorkouts,
        getDailyStepCountSamples: AppleHealthKit.getDailyStepCountSamples,
        saveSteps: AppleHealthKit.saveSteps,
        saveWalkingRunningDistance: AppleHealthKit.saveWalkingRunningDistance,
        getDistanceWalkingRunning: AppleHealthKit.getDistanceWalkingRunning,
        getDailyDistanceWalkingRunningSamples:
          AppleHealthKit.getDailyDistanceWalkingRunningSamples,
        getDistanceCycling: AppleHealthKit.getDistanceCycling,
        getDailyDistanceCyclingSamples:
          AppleHealthKit.getDailyDistanceCyclingSamples,
        getFlightsClimbed: AppleHealthKit.getFlightsClimbed,
        getDailyFlightsClimbedSamples:
          AppleHealthKit.getDailyFlightsClimbedSamples,
        getEnergyConsumedSamples: AppleHealthKit.getEnergyConsumedSamples,
        getProteinSamples: AppleHealthKit.getProteinSamples,
        getFiberSamples: AppleHealthKit.getFiberSamples,
        getTotalFatSamples: AppleHealthKit.getTotalFatSamples,
        saveFood: AppleHealthKit.saveFood,
        saveWater: AppleHealthKit.saveWater,
        getWater: AppleHealthKit.getWater,
        saveHeartRateSample: AppleHealthKit.saveHeartRateSample,
        getWaterSamples: AppleHealthKit.getWaterSamples,
        getHeartRateSamples: AppleHealthKit.getHeartRateSamples,
        getRestingHeartRate: AppleHealthKit.getRestingHeartRate,
        getWalkingHeartRateAverage: AppleHealthKit.getWalkingHeartRateAverage,
        getActiveEnergyBurned: AppleHealthKit.getActiveEnergyBurned,
        getBasalEnergyBurned: AppleHealthKit.getBasalEnergyBurned,
        getAppleExerciseTime: AppleHealthKit.getAppleExerciseTime,
        getAppleStandTime: AppleHealthKit.getAppleStandTime,
        getVo2MaxSamples: AppleHealthKit.getVo2MaxSamples,
        getBodyTemperatureSamples: AppleHealthKit.getBodyTemperatureSamples,
        getBloodPressureSamples: AppleHealthKit.getBloodPressureSamples,
        getRespiratoryRateSamples: AppleHealthKit.getRespiratoryRateSamples,
        getHeartRateVariabilitySamples:
          AppleHealthKit.getHeartRateVariabilitySamples,
        getHeartbeatSeriesSamples: AppleHealthKit.getHeartbeatSeriesSamples,
        getRestingHeartRateSamples: AppleHealthKit.getRestingHeartRateSamples,
        getBloodGlucoseSamples: AppleHealthKit.getBloodGlucoseSamples,
        getCarbohydratesSamples: AppleHealthKit.getCarbohydratesSamples,
        saveBloodGlucoseSample: AppleHealthKit.saveBloodGlucoseSample,
        saveCarbohydratesSample: AppleHealthKit.saveCarbohydratesSample,
        deleteBloodGlucoseSample: AppleHealthKit.deleteBloodGlucoseSample,
        deleteCarbohydratesSample: AppleHealthKit.deleteCarbohydratesSample,
        getSleepSamples: AppleHealthKit.getSleepSamples,
        getInfo: AppleHealthKit.getInfo,
        getMindfulSession: AppleHealthKit.getMindfulSession,
        saveMindfulSession: AppleHealthKit.saveMindfulSession,
        getWorkoutRouteSamples: AppleHealthKit.getWorkoutRouteSamples,
        saveWorkout: AppleHealthKit.saveWorkout,
        getAuthStatus: AppleHealthKit.getAuthStatus,
        getLatestBloodAlcoholContent:
          AppleHealthKit.getLatestBloodAlcoholContent,
        getBloodAlcoholContentSamples:
          AppleHealthKit.getBloodAlcoholContentSamples,
        saveBloodAlcoholContent: AppleHealthKit.saveBloodAlcoholContent,
        getDistanceSwimming: AppleHealthKit.getDistanceSwimming,
        getDailyDistanceSwimmingSamples:
          AppleHealthKit.getDailyDistanceSwimmingSamples,
        getOxygenSaturationSamples: AppleHealthKit.getOxygenSaturationSamples,
        getElectrocardiogramSamples: AppleHealthKit.getElectrocardiogramSamples,
        saveBodyFatPercentage: AppleHealthKit.saveBodyFatPercentage,
        saveBodyTemperature: AppleHealthKit.saveBodyTemperature,
        getEnvironmentalAudioExposure:
          AppleHealthKit.getEnvironmentalAudioExposure,
        getHeadphoneAudioExposure: AppleHealthKit.getHeadphoneAudioExposure,
        getClinicalRecords: AppleHealthKit.getClinicalRecords,
        getActivitySummary: AppleHealthKit.getActivitySummary,
        getInsulinDeliverySamples: AppleHealthKit.getInsulinDeliverySamples,
        saveInsulinDeliverySample: AppleHealthKit.saveInsulinDeliverySample,
        deleteInsulinDeliverySample: AppleHealthKit.deleteInsulinDeliverySample,

        Constants: {
          Activities,
          Observers,
          Permissions,
          Units,
        },
      }

module.exports = HealthKit
