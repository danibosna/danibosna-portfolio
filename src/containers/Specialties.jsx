import React from 'react';
import Specialty from '@components/Specialty.jsx';
import mixer from '@images/mixer_icon.png';
import code from '@images/code_icon.png';

const Specialties = () => {
  return (
    <section className="specialties__box container">
      <h2 className="specialties__titles titles">My Specialties</h2>
      <div className="specialties">
          <Specialty
            titulo='Audio Mastering'
            src={mixer}
            info='Mas de 10 años de conocimiento en produccion musical'
          />
          <Specialty
            titulo='Frontend Development'
            src={code}
            info='Desarrollo de Frontend con las tecnologias y frameworks mas innovadores del momento'
          />
      </div>
    </section>
  )
}

export default Specialties;