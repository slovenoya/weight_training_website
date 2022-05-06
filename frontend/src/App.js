import {useEffect, useState} from 'react';
import axios from "axios";
// import {format} from "date-fns";

const baseURL =  "http://127.0.0.1:5000";

function App() {
  const [description, setDescription] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [eventsList, setEventsList] = useState([]);
  const [eventId, setEventId] = useState(null);

  const fetchEvents = async() => {
    const data = await axios.get(`${baseURL}/event`);
    const {events} = data.data;
    setEventsList(events);
    console.log("data: ", data);
  }

  const handleChange = (e, field) => {
    if (field === 'edit') {
      setEditDescription(e.target.value)
    } else {
      setDescription(e.target.value);
    }
  }

  const handleEdit = (event) => {
    setEventId(event.id);
    setEditDescription(event.description);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {    
      if (editDescription) {
        const data = await axios.put(`${baseURL}/event/${eventId}`, {description : editDescription});
        const updatedEvent = data.data.event;
        const updatedList = eventsList.map(event => {
          if (eventId === event.id) {
            return event = updatedEvent;
          }
          return event;
        })
        setEventsList(updatedList);
      } else {
        const data = await axios.post(`${baseURL}/event`, {description});
        setEventsList([...eventsList, data.data])
      }
      setDescription('');   
      setEditDescription('');
      setEventId(null);
    } catch (err) {
      console.log(err.message);
    } 
  }

  const handleDelete = async(id) => {
    try {
      await axios.delete(`${baseURL}/event/${id}`)
      const updatedList = eventsList.filter(event => event.id !== id)
      setEventsList(updatedList);
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    fetchEvents(); 
  }, [])

  return (
    <div className="App">
      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor='description'>Description</label>
          <input 
            onChange={(e) => handleChange(e, 'description')}
            type="text" 
            name='description' 
            id='description'
            placeholder='describe the event '
            value={description} />
          <button type='submit'>submit</button>
        </form>
      </section>
      <section>
        <ul>
          {eventsList.map(event => {
            if (eventId === event.id) {
              return (
                <li key={event.id}>
                  <form >
                    <input 
                      onChange={(e) => handleChange(e, 'edit')}
                      type="text" 
                      name='editDescription' 
                      id='editDescription'
                      value={editDescription} />
                    <button type="submit" onClick={handleSubmit}>submit</button>
                  </form> 
                </li>
              )
            } 
            else {
              return (
                <li key={event.id}>
                  {event.description}
                  <button onClick={() => handleEdit(event)}>edit</button>
                  <button onClick={() => handleDelete(event.id)}>delete</button>
                </li>)
            }})
          }
        </ul>
      </section>
    </div>
  );
}

export default App;
