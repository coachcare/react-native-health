import { Activities, Observers, Permissions, Units } from './src/constants'

const { AppleHealthKit } = require('react-native').NativeModules

export const HealthKit = {
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
  getWaistCircumferenceSamples: AppleHealthKit.getWaistCircumferenceSamples,
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
  getDailyDistanceWalkingRunningSamples: AppleHealthKit.getDailyDistanceWalkingRunningSamples,
  getDistanceCycling: AppleHealthKit.getDistanceCycling,
  getDailyDistanceCyclingSamples: AppleHealthKit.getDailyDistanceCyclingSamples,
  getFlightsClimbed: AppleHealthKit.getFlightsClimbed,
  getDailyFlightsClimbedSamples: AppleHealthKit.getDailyFlightsClimbedSamples,
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
  getHeartRateVariabilitySamples: AppleHealthKit.getHeartRateVariabilitySamples,
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
  getLatestBloodAlcoholContent: AppleHealthKit.getLatestBloodAlcoholContent,
  getBloodAlcoholContentSamples: AppleHealthKit.getBloodAlcoholContentSamples,
  saveBloodAlcoholContent: AppleHealthKit.saveBloodAlcoholContent,
  getDistanceSwimming: AppleHealthKit.getDistanceSwimming,
  getDailyDistanceSwimmingSamples: AppleHealthKit.getDailyDistanceSwimmingSamples,
  getOxygenSaturationSamples: AppleHealthKit.getOxygenSaturationSamples,
  getElectrocardiogramSamples: AppleHealthKit.getElectrocardiogramSamples,
  saveBodyFatPercentage: AppleHealthKit.saveBodyFatPercentage,
  saveBodyTemperature: AppleHealthKit.saveBodyTemperature,
  getEnvironmentalAudioExposure: AppleHealthKit.getEnvironmentalAudioExposure,
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