import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';

const TurnoSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({
      searchTerm,
      date: selectedDate,
      time: selectedTime
    });
  };

  return (
    <form className="d-flex gap-3 mb-4" onSubmit={handleSearch}>
      <div className="input-group">
        <span className="input-group-text">
          <FontAwesomeIcon icon={faSearch} />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar por nombre o email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="input-group">
        <span className="input-group-text">
          <FontAwesomeIcon icon={faCalendar} />
        </span>
        <input
          type="date"
          className="form-control"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      <div className="input-group">
        <span className="input-group-text">
          <FontAwesomeIcon icon={faClock} />
        </span>
        <select
          className="form-select"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          <option value="">Hora</option>
          {[9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((hour) => (
            <option key={hour} value={`${hour}:00`}>{hour}:00</option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        <FontAwesomeIcon icon={faSearch} className="me-2" />
        Buscar
      </button>
    </form>
  );
};

export default TurnoSearch;
