import ContactList from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { FormPhone } from './FormPhone/FormPhone';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <FormPhone />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
