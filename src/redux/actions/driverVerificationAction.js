import {
  BACK_CNIC,
  FRONT_CNIC,
  LICENSE_BACK,
  LICENSE_FRONT,
  VEHICLE_DECUMENTS,
} from '../actionType';

export const frontCnic = data => {
  return {
    type: FRONT_CNIC,
    payload: data,
  };
};
export const backCnic = data => {
  return {
    type: BACK_CNIC,
    payload: data,
  };
};
export const driverPic = data => {
  return {
    type: FRONT_CNIC,
    payload: data,
  };
};
export const licenseFront = data => {
  return {
    type: LICENSE_FRONT,
    payload: data,
  };
};
export const licenseBack = data => {
  return {
    type: LICENSE_BACK,
    payload: data,
  };
};
export const vehicleDocument = data => {
  return {
    type: VEHICLE_DECUMENTS,
    payload: data,
  };
};
