const Person = require('./models/person')
const Meetup = require('./models/meetup')
const PersonService = require('./services/person-service')

console.log('Hello World!')

async function main() {
  const mert = new Person('Mert', 33)
  const armagan = new Person('Armagan', 34)

  const wtmb = new Meetup('Women Tech Makers Berlin', 'Eurostaff')
  armagan.attend(wtmb)
  mert.attend(wtmb)
  wtmb.report()

  await PersonService.add(mert)
  await PersonService.add(armagan)
  const people = await PersonService.findAll()

  console.log(people[0].name)
}

main()
