const convertFourDigitsToTime = inputTime => {
  return inputTime.substring(0, 2) + ':' + inputTime.substring(2, 4)
}

const convertThreeDigitsToTime = inputTime => {
  return inputTime.toString().substring(0, 1) + ':' + inputTime.toString().substring(1, 3)
}

export const convertTime = (openOrClose, day, business) => {
  let time

  if (business.hours[day][openOrClose] === 2400) {
    const timeAsNumber = parseInt(business.hours[day][openOrClose]) - 1200
    time = convertFourDigitsToTime(timeAsNumber.toString()) + 'am'
  } else if (business.hours[day][openOrClose] === '0000') {
    return 'N/A'
  } else if (business.hours[day][openOrClose] >= 1300) {
    const timeAsNumber = parseInt(business.hours[day][openOrClose]) - 1200
    
    if (timeAsNumber.toString().length === 3) {
      time = convertThreeDigitsToTime(timeAsNumber) + 'pm'
    } else time = convertFourDigitsToTime(timeAsNumber.toString()) + 'pm'
    
  } else if (business.hours[day][openOrClose] < 1200) {
    
    if (business.hours[day][openOrClose][0] === '0') {
      const singleDigitTime = business.hours[day][openOrClose].slice(1)
      time = convertThreeDigitsToTime(singleDigitTime) + 'am'
    } else {
      time = convertFourDigitsToTime(business.hours[day][openOrClose]) + 'am'
    }
    
  } else {
    time = convertFourDigitsToTime(business.hours[day][openOrClose]) + 'pm'
  }
  return time
}

export const cleanData = business => {
  if (!business.location) {
    business.location = 'N/A'
  }

  if (!business.phone_number) {
    business.phone_number = 'N/A'
  }

  return business;
}