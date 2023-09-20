import React, { useState } from 'react';
import styles from './CircleNotes.module.scss';

function CircleNotes() {
  const [notes, setNotes] = useState([]);
  const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
  const maxNotesPerLine = 5;

  const addNote = (color) => {
    const newNote = {
      color: color,
      date: new Date().toLocaleDateString(),
      content: '',
    };

    if (notes.length % maxNotesPerLine === 0) {
      
      setNotes([...notes, newNote]);
    } else {
     
      setNotes([...notes, newNote]);
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const updateNote = (index, updatedContent) => {
    const updatedNotes = [...notes];
    updatedNotes[index].content = updatedContent;
    setNotes(updatedNotes);
  };

  return (
    <div className={styles['circle-notes-container']}>
      
      <div className={styles['circle-colors']}>
        {colors.map((color, index) => (
          <div key={index} className={styles['circle-container']}>
            <div
              className={`${styles['circle']} ${styles[color]}`}
              onClick={() => addNote(color)}
            ></div>
          </div>
        ))}
      </div>
      <div className={styles['notes-list']}>
        {notes.map((note, index) => (
          <div key={index} className={`${styles['note']} ${styles[note.color]}`}>
            <div className={styles['note-header']}>
              <span className={styles['note-date']}>{note.date}</span>
              <textarea
                className={styles['note-content']}
                placeholder="Enter your note..."
                value={note.content}
                onChange={(e) => updateNote(index, e.target.value)}
              ></textarea>
              <div className={styles['note-actions']}>
                
                <button onClick={() => deleteNote(index)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CircleNotes;
