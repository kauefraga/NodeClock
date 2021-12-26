import cachedDate from '../src/index'

// Tests run Clock()
// I can't solve this problem

const newDate = {
  hours: new Date().getHours(),
  minutes: new Date().getMinutes(),
  seconds: new Date().getSeconds()
}

describe('Should verify correct dates', () => {
  it('Should return correct hours', () => {
    expect(cachedDate?.hours).toEqual(newDate.hours)
  })
  it('Should return correct minutes', () => {
    expect(cachedDate?.minutes).toEqual(newDate.minutes)
  })
  it('Should return correct seconds', () => {
    expect(cachedDate?.seconds).toEqual(newDate.seconds)
  })
})
