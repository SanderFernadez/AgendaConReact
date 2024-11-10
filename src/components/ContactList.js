import React from 'react';

function ContactList({ contacts }) {
  return (
    <div>
      <h3 className="mb-3 text-center"><i className="fas fa-list"></i> Lista de Contactos</h3>
      <ul className="list-group mt-3">
        {contacts.length === 0 ? (
          <li className="list-group-item text-center">No hay contactos disponibles.</li>
        ) : (
          contacts.map((contact, index) => (
            <li key={index} className="list-group-item">
              <strong>{contact.nombre} {contact.apellido}</strong> - Tel: {contact.telefono}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ContactList;
