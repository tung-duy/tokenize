export const CALCULATE_PENDING = "CALCULATE_PENDING";
export const CALCULATE_FULFILLED = "CALCULATE_FULFILLED";

export const calculatePiPending = () => ({
  type: CALCULATE_PENDING
});

export const calculatePiFulfilled = () => ({
  type: CALCULATE_FULFILLED
});
