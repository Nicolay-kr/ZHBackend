import { type Parameters, type AirComponents} from './types';

export function transformData(data: any[]): { parameters: Parameters, airComponents: AirComponents } {
  const parameters: Parameters = {
    'air_quality': 0,
    'humidity': 0,
    'pressure': 0,
  };

  const airComponents: AirComponents = {
    'PM2.5': 0,
    'PM10': 0,
    'NO2': 0,
    'CO': 0,
    'O3': 0,
    'SO2': 0,
  };

  if (!data || data.length < 1) {
    return { parameters, airComponents };
  }

  data.forEach((item) => {
    const value = parseFloat(item.Value);
    switch (item.Name) {
      case 'CO':
        airComponents.CO = value;
        break;
      case 'SO2':
        airComponents.CO = value;
        break;
      case 'NO2':
        airComponents.NO2 = value;
        break;
      case 'O3':
        airComponents.O3 = value;
        break;
      case 'Air Pressure':
        parameters.pressure = value;
        break;
      case 'Rel. Humidity':
        parameters.humidity = value;
        break;
      case 'PM2.5':
        airComponents['PM2.5'] = value;
        break;
      case 'PM10':
        airComponents.PM10 = value;
        break;
    }
  });

  return { parameters, airComponents };
}
