// export const exempleContacts = [
//   { id: 'id-1', name: 'Fire department', number: '101' },
//   { id: 'id-2', name: 'Police', number: '102' },
//   { id: 'id-3', name: 'Ambulance', number: '103' },
//   { id: 'id-4', name: 'Gas service', number: '104' },
//   { id: 'id-5', name: 'Emergency service', number: '112' },
// ];

const startContacts = [
  { id: 'id-1', name: 'Fire department', number: '101' },
  { id: 'id-2', name: 'Police', number: '102' },
  { id: 'id-3', name: 'Ambulance', number: '103' },
  { id: 'id-4', name: 'Gas service', number: '104' },
  { id: 'id-5', name: 'Emergency service', number: '112' },
];

const savedContacts = window.localStorage.getItem('contacts');

export const getContacts = () => {
  if (savedContacts !== null && savedContacts.length > 0) {
    return [...JSON.parse(savedContacts)];
  } else return startContacts;
};
