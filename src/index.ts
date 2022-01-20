import { clear } from 'node:console'
import chalk from 'chalk'
import figlet from 'figlet'

Clock()

function Clock() {
  clear()

  const time = {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds()
  }

  console.log(
    chalk.magenta(
      figlet.textSync(`${time.hours} : ${time.minutes} : ${time.seconds}`)
    )
  )

  setTimeout(Clock, 1050)
}
