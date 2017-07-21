 const allContacts = require( './addContacts.json' )
const failedContacts = []
let errorCount = 0


const addContact = ( first_name, last_name, email ) => {
  const contact = {}
  contact.first_name = first_name
  contact.last_name = last_name
  contact.email = email
  if( typeof first_name === 'string' && typeof last_name === 'string' && typeof email === 'string' ) {
    allContacts.push( contact )
    return true
    } else {
      throw contact
    }
}

const addContacts = ( contacts ) => {
  contacts.forEach(( contact ) => {
    try {
      addContact( contact[0], contact[1], contact[2] )
    } catch ( e ) {
      errorCount ++
      failedContacts.push( e )
    }
  })
}

const printContacts = () => {
  const contacts = allContacts.map(( contact ) => {
    return [contact.first_name + " " + contact.last_name, contact.email]
  }).sort()

  const nameColumnLength = contacts.map (( contact ) => {
    return contact[0]
  }).reduce( findMaxLength, 0)

  const emailColumnLength = contacts.map (( contact ) => {
    return contact [1]
  }).reduce( findMaxLength, 0 )

  console.log( "All contacts: " );

  const bar = ( "|" + "-".repeat( nameColumnLength + 2 ) + "+" + "-".repeat( emailColumnLength + 2) + "|" )

  console.log( bar );
  console.log("| Full Name " + " ".repeat( nameColumnLength - 9 ) + "| Email Address " + " ".repeat( emailColumnLength - 13 ) + "|" );

  console.log( bar );
  contacts.forEach(( contact ) => {
    const name = contact[0]
    const email = contact[1]
    console.log( "| " + name + " ".repeat( nameColumnLength - name.length + 1 ) + "| " + email + " ".repeat( emailColumnLength - email.length + 1 ) + "|" );
  })
  console.log( bar );
  console.log( "Could not import " + errorCount + " contacts." );

  failedContacts.forEach(( contact ) => {
    console.log( "First: " + contact.first_name + ", Last" + contact.last_name + ", Email" + contact.email );
  })
}

const findMaxLength = ( length, string ) => {
  return string.length > length ? string.length : length
}


///////////////////////////////////////////////////////////////////////////
                     //Run tests here//


addContacts([
  [55, "Myall", "tmyall1@instagram.com"],
  ["Virginia", "Cankett", true],
  ["Wildon", 22, "whedleyd@purevolume.com"]
])

try{
  addContact( "Effie", "Tesfahun", "etesfahun@gmail.com" )
} catch ( e ) {}

console.assert( allContacts[allContacts.length - 1].first_name === "Effie" && allContacts[allContacts.length - 1].last_name === "Tesfahun" && allContacts[allContacts.length - 1].email === "etesfahun@gmail.com", "contact was not added" )


console.assert( failedContacts.length > 0, "failed contacts is not exactly 3." )

printContacts()
