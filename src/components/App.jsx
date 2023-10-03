import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
export const App = () => {
  return (
    <div
      style={{
        width: '700px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
        borderStyle: 'solid',
        boxShadow: '8px 8px 12px 0px rgba(66, 68, 90, 1)',
        backgroundColor: 'rgba(151, 122, 99, 0.75)',
      }}
    >
      <h1
        style={{
          fontWeight: 500,
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        Phonebook
      </h1>
      <ContactForm />

      <h2
        style={{
          fontWeight: 500,
        }}
      >
        Contacts
      </h2>
      <Filter />
      <ContactList />
    </div>
  );
};
