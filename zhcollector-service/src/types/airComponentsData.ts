export type AirComponent = "PM2.5" | "PM10" | "NO2" | "CO" | "O3" | "SO2";
export type AirComponents = Record<AirComponent, number>;

export const airComponentsList: AirComponent[] = ["PM2.5", "PM10", "NO2", "CO", "O3", "SO2"];
