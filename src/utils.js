export const cleanData = business => {
  if (!business.location) {
    business.location = 'N/A'
  }

  if (!business.phone_number) {
    business.phone_number = 'N/A'
  }

  return business;
}

export const convertFourDigitsToTime = inputTime => {
  return inputTime.substring(0, 2) + ':' + inputTime.substring(2, 4)
}

export const convertThreeDigitsToTime = inputTime => {
  return inputTime.toString().substring(0, 1) + ':' + inputTime.toString().substring(1, 3)
}