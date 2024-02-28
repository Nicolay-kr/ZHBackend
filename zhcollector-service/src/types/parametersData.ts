export type Parameter = "air_quality" | "humidity" | "pressure";
export type Parameters = Record<Parameter, number>;

export enum ParametersMap {
  AIR_QUALITY = "air_quality",
  HUMIDITY = "humidity",
  PRESSURE = "pressure",
};
