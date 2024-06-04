import React from 'react';

import './AliasSection.scss';
import './Morphologist.scss';
import MorphologistAlbum from '../MorphologistAlbum';

function Morphologist() {
  return (
    <section className="alias-container" id="alias-morphologist">
      <h4 className="alias-title">Morphologist</h4>
      <h5 className="alias-description">Acid Techno.</h5>
      <MorphologistAlbum
        title="Extant Africana"
        year={2023}
        month="May"
        day={5}
        tracks={[
          'Southern Rhinocerous',
          'Silverback',
          'Impala',
          'Hyena',
          'King Cheetah',
          'Wildebeest',
          'Plains Zebra',
          'Bush Elephant'
        ]}
      />
      <MorphologistAlbum
        title="Extant Americana"
        year={2023}
        month="July"
        day={19}
        tracks={[
          'Lynx',
          'Diamondback',
          'Bark Scorpion',
          'Coyote',
          'Peregrine',
          'Nine-Banded',
          'Bald Eagle',
          'Mustang'
        ]}
      />
      <MorphologistAlbum
        title="Extant Aquatica"
        year={2023}
        month="August"
        day={4}
        tracks={[
          'Viperfish',
          'Humpback',
          'Manta',
          'Eqalussuaq',
          'Tiburonia',
          'Architeuthis',
          'Angler',
          'Blue Whale'
        ]}
      />
      <MorphologistAlbum
        title="Extant Oceania"
        year={2023}
        month="September"
        day={1}
        tracks={[
          'Syndey Hawk',
          'Redback',
          'Kangaroo',
          'Nothomyrmecia',
          'Ghost Bat',
          'Cannibal Frog',
          'Whistling Tarantula',
          'Lasiorhinus'
        ]}
      />
    </section>
  );
}

Morphologist.propTypes = {};

Morphologist.defaultProps = {};

export default Morphologist;
