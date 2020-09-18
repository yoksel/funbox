import data from '../data.json';
const unitsText: Record<string, string | Array<string>> = data.units;

export const getClassName = (base: string, mods: Array<string> | null): string => {
  if (mods) {
    mods = mods.filter(item => item);
  }
  if (!mods || mods.length === 0) {
    return base;
  }

  const classesList = mods.reduce((prev, item) => {
    prev.push(`${base}--${item}`);
    return prev;
  }, [base]);

  return classesList.join(' ');
};

export const formatWeight = (value: number | undefined): string => {
  if (!value) {
    return '';
  }
  return value.toString().replace('.', ',');
};

interface IaddUnitsText { value: number; units: string }

interface IgetPlurals {
  unitsDictionary: Array<string>;
  value: number;
}

const getPlurals = ({ unitsDictionary, value }: IgetPlurals): string => {
  if (unitsDictionary.length < 3) {
    return '';
  }

  if (value > 100) {
    value = +value.toString().slice(-2);
  }

  if (value > 20) {
    value = value % 10;
  }

  if (value === 1) {
    return unitsDictionary[0];
  }

  if (value > 1 && value < 5) {
    return unitsDictionary[1];
  }

  return unitsDictionary[2];
};

export const addUnitsText = (params: IaddUnitsText): valueWithUnits => {
  const { value, units } = params;
  const text: string | Array<string> = unitsText[units];

  if (typeof text === 'string') {
    return {
      ...params,
      unitsText: text
    }; ;
  }

  return {
    ...params,
    unitsText: getPlurals({ unitsDictionary: text, value })
  };
};
