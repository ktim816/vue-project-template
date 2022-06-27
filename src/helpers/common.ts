import {WithId} from '@interfaces';

export const last = <T = any>(arr: T[]) => arr[arr.length - 1];

export const findById = <T extends WithId>(target: T) => {
  return (source: T) => {
    return source.id === target.id;
  };
};

export const filterById = <T extends WithId>(target: T) => {
  return (source: T) => {
    return source.id !== target.id;
  };
};
