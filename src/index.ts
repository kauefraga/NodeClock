import { clear } from 'node:console'
import chalk from 'chalk'
import figlet from 'figlet'

Clock()

// Somente para testes
// Only for testing purpose
let cachedDate = {
  hours: new Date().getHours(),
  minutes: new Date().getMinutes(),
  seconds: new Date().getSeconds()
}

async function Clock() {
  clear()

  const time = {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds()
  }

  console.log(
    chalk.magenta(
      figlet.textSync(`${time.hours} : ${time.minutes} : ${time.seconds}`, 'Big')
    )
  )

  setTimeout(Clock, 1050)
}

export default cachedDate
